document.addEventListener('DOMContentLoaded', function() {
  // Navigation functionality
  const homeButton = document.getElementById('homeButton');
  const articlesButton = document.getElementById('articlesButton');
  const casesButton = document.getElementById('casesButton');
  
  function navigateTo(page) {
      [homeButton, articlesButton, casesButton].forEach(button => {
          button.classList.remove('active');
      });
      event.currentTarget.classList.add('active');
      
      // In a single-page application, you would show/hide sections here
      // For multi-page site, this would navigate to different pages
      console.log(`Navigating to ${page}`);
  }
  
  homeButton.addEventListener('click', (e) => {
      e.preventDefault();
      navigateTo('home');
      // For SPA: showSection('home-content');
  });
  
  articlesButton.addEventListener('click', (e) => {
      e.preventDefault();
      navigateTo('articles');
      // For SPA: showSection('articles-content');
  });
  
  casesButton.addEventListener('click', (e) => {
      e.preventDefault();
      navigateTo('cases');
      // For SPA: showSection('cases-content');
  });
  
  // Search functionality (keep existing search implementation)
  
  // Newsletter functionality (keep existing newsletter implementation)
  
  // AdSense functionality (keep existing AdSense implementation)
  
  // Set active button based on current page
  function setActiveButton() {
      const path = window.location.pathname;
      [homeButton, articlesButton, casesButton].forEach(button => {
          button.classList.remove('active');
      });
      
      if (path.includes('articles')) {
          articlesButton.classList.add('active');
      } else if (path.includes('cases')) {
          casesButton.classList.add('active');
      } else {
          homeButton.classList.add('active');
      }
  }
  
  setActiveButton();
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          if (targetId === '#') return;
          
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 100,
                  behavior: 'smooth'
              });
          }
      });
  });
  
  // Lazy load images
  if ('IntersectionObserver' in window) {
      const lazyImages = document.querySelectorAll('.thumbnail-image');
      const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  const img = entry.target;
                  img.style.backgroundImage = img.style.backgroundImage; // Forces load
                  imageObserver.unobserve(img);
              }
          });
      });
      
      lazyImages.forEach(img => imageObserver.observe(img));
  }
});