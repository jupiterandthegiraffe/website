exports.default = function() {
  const contactForm = document.getElementById('contact-form')
  const formType = document.getElementById("form-type");
  const budget = document.getElementById("budget");

  if (contactForm) {
    formType.addEventListener("change", (e) => {
      Array.from(contactForm.querySelectorAll('.input-wrapper')).forEach(element => {
        element.style.display = 'block'
        element.style.visibility = ''
        const required = element.querySelector('[data-required]')
        if (required) {
          required.setAttribute('required', 'true')
        }
      })

      if (e.target.value === "Project Proposal") {
        budget.style.display = "block";
        budget.querySelectorAll("input").forEach((input) => {
          input.setAttribute("required", "true");
        })
        setTimeout(() => {
          budget.setAttribute("data-pg-ia-show", "");
          budget.removeAttribute("data-pg-ia-hide");
        }, 300);
      } else {
        budget.querySelectorAll("input").forEach((input) => {
          input.removeAttribute("required");
        })
        budget.removeAttribute("data-pg-ia-show");
        budget.classList.add("fade-out");
        setTimeout(() => {
          budget.style.display = "none";
          budget.classList.remove("fade-out");
          budget.setAttribute("data-pg-ia-hide", "");
        }, 300);
      }
      if (e.target.value === 'Feedback') { 
        Array.from(contactForm.querySelectorAll('.input-wrapper')).forEach(element => {
          const message = element.querySelector('[name=message]')
          const required = element.querySelector('[required]')
          element.style.display = message ? 'block' : 'none'
          element.style.visibility = message ? '' : 'hidden'
          if (required && !message) {
            required.removeAttribute('required')
            required.setAttribute('data-required', 'true')
          }
        })
      }
    });
  }

  // params is set on window in main.js
  if (params.type) {
    const checked = contactForm.querySelector('[id="' + params.type + '"]')
    if (checked) {
      checked.click()
    }
  }
}