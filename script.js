

// 1. DOM INTERACTION: Show/Hide Extra Content
const toggleBtn = document.querySelector('#toggle-btn');
const extraInfo = document.querySelector('#extra-info');

if (toggleBtn && extraInfo) {
  toggleBtn.addEventListener('click', () => {
    const isHidden = extraInfo.hidden;
    extraInfo.hidden = !isHidden;
    toggleBtn.textContent = isHidden ? 'Show Less' : 'Show More';
  });
}

// 2. FORM VALIDATION: Contact Form (on about.html)
const contactForm = document.querySelector('form');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    const requiredInputs = contactForm.querySelectorAll('[required], input, textarea');
    let hasError = false;

    requiredInputs.forEach((input) => {
      if (input.type === 'submit' || input.type === 'button') return;

      let errorSpan = input.nextElementSibling;
      if (!errorSpan || !errorSpan.classList.contains('error-message')) {
        errorSpan = document.createElement('span');
        errorSpan.className = 'error-message';
        errorSpan.style.color = '#b00020';
        errorSpan.style.display = 'block';
        errorSpan.setAttribute('role', 'alert');
        input.insertAdjacentElement('afterend', errorSpan);
      }

      if (input.value.trim() === '') {
        event.preventDefault();
        errorSpan.textContent = `${input.name || 'This field'} is required.`;
        input.setAttribute('aria-invalid', 'true');
        hasError = true;
      }

      // Clear error when user starts typing
      input.addEventListener('input', () => {
        errorSpan.textContent = '';
        input.removeAttribute('aria-invalid');
      });
    });
  });
}

