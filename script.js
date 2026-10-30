/* Configura aquí el endpoint del CRM o servidor cuando esté disponible. */
const LANDING_CONFIG = Object.freeze({
  formEndpoint: "",
  countdownSeconds: 420,
});

(() => {
  "use strict";
  const form = document.querySelector("#lead-form");
  const status = document.querySelector("#form-status");
  const modal = document.querySelector("#confirmation-modal");
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  let previousFocus = null;
  const deadline = Date.now() + LANDING_CONFIG.countdownSeconds * 1000;
  function updateCountdown() {
    const seconds = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
    const parts = {
      horas: Math.floor(seconds / 3600),
      min: Math.floor((seconds % 3600) / 60),
      seg: seconds % 60,
    };
    document.querySelectorAll("[data-countdown-part]").forEach((element) => {
      element.textContent = String(
        parts[element.dataset.countdownPart],
      ).padStart(2, "0");
    });
    if (!seconds) clearInterval(countdownInterval);
  }
  const countdownInterval = setInterval(updateCountdown, 1000);
  updateCountdown();

  const faqButtons = [...document.querySelectorAll("[data-faq-toggle]")];
  function setFAQ(button, expanded) {
    button.setAttribute("aria-expanded", String(expanded));
    document.getElementById(button.getAttribute("aria-controls")).hidden =
      !expanded;
    button.closest("[data-faq-item]").style.background = expanded
      ? "#111418"
      : "transparent";
    button.querySelector("[data-faq-label]").style.color = expanded
      ? "#E2DDD3"
      : "#9E9A90";
    button.querySelector("[data-faq-icon]").style.transform = expanded
      ? "rotate(45deg)"
      : "rotate(0deg)";
  }
  faqButtons.forEach((button) =>
    button.addEventListener("click", () => {
      const wasOpen = button.getAttribute("aria-expanded") === "true";
      faqButtons.forEach((item) => setFAQ(item, item === button && !wasOpen));
    }),
  );

  function closeModal() {
    if (!modal.open) return;
    modal.close();
    document.body.classList.remove("modal-open");
    previousFocus?.focus({ preventScroll: true });
  }
  modal
    .querySelector('[data-action="close-confirmation"]')
    .addEventListener("click", closeModal);
  modal.addEventListener("cancel", (event) => {
    event.preventDefault();
    closeModal();
  });
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });
  document
    .querySelector('[data-action="go-to-form"]')
    .addEventListener("click", () => {
      form.scrollIntoView({
        behavior: reduceMotion ? "instant" : "smooth",
        block: "center",
      });
      form.elements.name.focus({ preventScroll: true });
    });
  const today = new Date();
  form.elements.dob.max = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
  form.elements.country.addEventListener("change", (event) => {
    event.target.style.color = event.target.value ? "#E2DDD3" : "#3A3835";
  });
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    status.hidden = false;
    status.className = "form-status";
    if (!LANDING_CONFIG.formEndpoint) {
      status.textContent =
        "El formulario aún no está conectado a un servicio de envío. Tus datos no se han enviado.";
      return;
    }
    const button = form.querySelector('[type="submit"]');
    previousFocus = button;
    button.disabled = true;
    status.textContent = "Enviando tus datos…";
    try {
      const response = await fetch(LANDING_CONFIG.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!response.ok) throw new Error("No se pudo enviar");
      status.hidden = true;
      modal.showModal();
      document.body.classList.add("modal-open");
    } catch {
      status.textContent =
        "No se pudo enviar el formulario. Inténtalo de nuevo.";
    } finally {
      button.disabled = false;
    }
  });
})();
