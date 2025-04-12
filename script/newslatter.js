document.addEventListener('DOMContentLoaded', function() {
  // ... (keep all your existing JavaScript code)

  // Newsletter functionality
  const newsletterForm = document.querySelector('.newsletter-form');
  const newsletterInput = newsletterForm.querySelector('input[type="email"]');
  const newsletterButton = newsletterForm.querySelector('button');
  
  // Newsletter form submission
  newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const email = newsletterInput.value.trim();
      
      if (!isValidEmail(email)) {
          showNewsletterError('Please enter a valid email address');
          return;
      }
      
      // Disable button during submission
      newsletterButton.disabled = true;
      newsletterButton.textContent = 'Subscribing...';
      
      // Simulate API call (replace with actual AJAX call)
      setTimeout(() => {
          subscribeToNewsletter(email)
              .then(response => {
                  showNewsletterSuccess('Thank you for subscribing!');
                  newsletterForm.reset();
              })
              .catch(error => {
                  showNewsletterError('Subscription failed. Please try again.');
              })
              .finally(() => {
                  newsletterButton.disabled = false;
                  newsletterButton.textContent = 'Subscribe';
              });
      }, 1000);
  });
  
  // Email validation
  function isValidEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
  }
  
  // Simulated subscription function (replace with actual API call)
  function subscribeToNewsletter(email) {
      return new Promise((resolve, reject) => {
          // In a real implementation, this would be an AJAX call
          console.log(`Subscribing email: ${email}`);
          
          // Simulate 90% success rate for demo purposes
          const isSuccess = Math.random() > 0.1;
          
          setTimeout(() => {
              if (isSuccess) {
                  resolve({ status: 'success', email });
              } else {
                  reject(new Error('Server error'));
              }
          }, 800);
      });
  }
  
  // Show success message
  function showNewsletterSuccess(message) {
      // Remove any existing messages
      const existingMessage = newsletterForm.querySelector('.newsletter-message');
      if (existingMessage) existingMessage.remove();
      
      const successElement = document.createElement('div');
      successElement.className = 'newsletter-message newsletter-success';
      successElement.textContent = message;
      newsletterForm.appendChild(successElement);
      
      // Remove message after 5 seconds
      setTimeout(() => {
          successElement.remove();
      }, 5000);
  }
  
  // Show error message
  function showNewsletterError(message) {
      // Remove any existing messages
      const existingMessage = newsletterForm.querySelector('.newsletter-message');
      if (existingMessage) existingMessage.remove();
      
      const errorElement = document.createElement('div');
      errorElement.className = 'newsletter-message newsletter-error';
      errorElement.textContent = message;
      newsletterForm.insertBefore(errorElement, newsletterButton);
      
      // Highlight the input field
      newsletterInput.classList.add('error');
      setTimeout(() => {
          newsletterInput.classList.remove('error');
      }, 2000);
  }
  
  // Real-time email validation as user types
  newsletterInput.addEventListener('input', function() {
      const email = this.value.trim();
      
      // Remove any existing validation messages while typing
      const existingMessage = newsletterForm.querySelector('.newsletter-message');
      if (existingMessage && !existingMessage.classList.contains('newsletter-success')) {
          existingMessage.remove();
      }
      
      // Visual feedback for valid/invalid email
      if (email.length > 0) {
          if (isValidEmail(email)) {
              this.classList.remove('error');
              this.classList.add('valid');
          } else {
              this.classList.remove('valid');
              this.classList.add('error');
          }
      } else {
          this.classList.remove('valid', 'error');
      }
  });
});