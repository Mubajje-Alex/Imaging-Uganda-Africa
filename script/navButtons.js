document.addEventListener('DOMContentLoaded', function() {
  // Navigation buttons
  const homeButton = document.getElementById('homeButton');
  const articlesButton = document.getElementById('articlesButton');
  const casesButton = document.getElementById('casesButton');
  
  // Search elements
  const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');
  const searchResults = document.getElementById('searchResults');
  
  // Website content data
  const websiteContent = {
      articles: [
          {
              id: 1,
              title: "Web Development Trends 2023",
              description: "Explore the latest technologies shaping modern web development this year.",
              content: "In 2023, web development continues to evolve with new frameworks and tools...",
              url: "/articles/web-development",
              keywords: ["web development", "trends", "2023", "frameworks"]
          },
          // ... (keep your existing articles and cases data)
      ],
      cases: [
          // ... (keep your existing cases data)
      ]
  };

  // Navigation functionality
  function navigateTo(page) {
      // Remove active class from all buttons
      [homeButton, articlesButton, casesButton].forEach(button => {
          button.classList.remove('active');
      });
      
      // Add active class to the clicked button
      event.currentTarget.classList.add('active');
      
      // Navigate to the appropriate page
      switch(page) {
          case 'home':
              window.location.href = "/";
              break;
          case 'articles':
              window.location.href = "https://imaging-uganda-africa.com/articles";
              break;
          case 'cases':
              window.location.href = "https://imaging-uganda-africa.com/cases";
              break;
          default:
              window.location.href = "/";
      }
  }
  
  // Enhanced search function (keep your existing search implementation)
  function performSearch() {
      // ... (keep your existing search implementation)
  }
  
  // Helper function to highlight matching text (keep your existing implementation)
  function highlightMatches(text, query) {
      // ... (keep your existing implementation)
  }
  
  // Event listeners for navigation
  homeButton.addEventListener('click', (e) => {
      e.preventDefault();
      navigateTo('home');
  });
  
  articlesButton.addEventListener('click', (e) => {
      e.preventDefault();
      navigateTo('articles');
  });
  
  casesButton.addEventListener('click', (e) => {
      e.preventDefault();
      navigateTo('cases');
  });
  
  // Event listeners for search (keep your existing implementation)
  searchButton.addEventListener('click', performSearch);
  searchInput.addEventListener('input', function() {
      // ... (keep your existing implementation)
  });
  searchInput.addEventListener('keyup', function(e) {
      // ... (keep your existing implementation)
  });
  
  // Hide search results when clicking outside (keep your existing implementation)
  document.addEventListener('click', function(e) {
      // ... (keep your existing implementation)
  });
  
  // Highlight current page on load
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
  
  // If this is a single-page application, you would use this alternative approach:
  /*
  function showSection(sectionId) {
      // Hide all sections
      document.querySelectorAll('.content-section').forEach(section => {
          section.style.display = 'none';
      });
      
      // Show the requested section
      document.getElementById(sectionId).style.display = 'block';
  }
  
  homeButton.addEventListener('click', (e) => {
      e.preventDefault();
      showSection('home-section');
      history.pushState(null, null, '/');
      setActiveButton();
  });
  */
});
