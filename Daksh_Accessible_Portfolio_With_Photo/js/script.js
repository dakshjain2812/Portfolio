document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.checkValidity()) {
        status.textContent = "Please complete all required fields correctly.";
        form.reportValidity();
        return;
      }
      status.textContent = "Thank you! Your message is ready to be sent.";
      form.reset();
    });
  }
});
