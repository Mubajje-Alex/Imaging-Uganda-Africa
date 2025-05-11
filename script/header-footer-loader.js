// Website content data - moved to global scope so it's accessible to all functions
const websiteContent = {
  articles: [
    // Your article data (same as in your previous code)
    {
      id: 1,
      title: "Liver Ultrasound",
      description: "Detailed explanation of liver ultrasound",
      content: "Includes indications, techinique, normal findings as well as pathological findings during liver ultrasound",
      url: "https://imaging-uganda-africa.com/articles/liver-ultrasound",
      keywords: ["Liver", "Liver Ultrasound", "Hepatic cysts", "hemangioma", "liver masses", "Hydatid cyst"]
    },
    
  ],
  cases: [
    // Your case data (same as in your previous code)
    {
      id: 101,
      title: "Pelvic Inflammatory Disease (PID)",
      description: "A 28-year-old female with lower abdominal pain, fever and vaginal discharge.",
      content: "About case presentation, Pysical examination, ultrasound findings diagnosis and the differential diagnoses.",
      url: "https://imaging-uganda-africa.com/cases/pid.html",
      keywords: ["PID", "Pelvic Inflammatory Disease", "Cogwheel", "pyosalpinx", "LAP", "Lower abdominal pain", "STIs", "Sexually Transmited Diseases", "Pelvic fluid", "Pouch Of Douglas", "Fluid filled tubes", "Fallopian tubes"]
    },
    
  ]
};

document.addEventListener('DOMContentLoaded', function() {
    // Load header
    fetch('https://imaging-uganda-africa.com/components/header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('body').insertAdjacentHTML('afterbegin', data);
            initializeHeader();
        })
        .catch(error => console.error('Error loading header:', error));

    // Load footer
    fetch('https://imaging-uganda-africa.com/components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('body').insertAdjacentHTML('beforeend', data);
            initializeFooter();
        })
        .catch(error => console.error('Error loading footer:', error));
});

function initializeHeader() {
    // Set active button based on current page
    const path = window.location.pathname;
    const page = path.split('/').pop().split('.')[0]; // Get the page name without extension
    
    // Remove active class from all buttons first
    document.querySelectorAll('.nav-button').forEach(button => {
        button.classList.remove('active');
    });
    
    // Set active class based on current page
    if (page === 'index' || page === '') {
        document.getElementById('homeButton').classList.add('active');
    } else if (page === 'articles' || page.startsWith('articles-')) {
        document.getElementById('articlesButton').classList.add('active');
    } else if (page === 'cases') {
        document.getElementById('casesButton').classList.add('active');
    }
    
    // Initialize search functionality
    initializeSearch();
    
    // Add navigation event listeners
    document.getElementById('homeButton')?.addEventListener('click', () => navigateTo('home'));
    document.getElementById('articlesButton')?.addEventListener('click', () => navigateTo('articles'));
    document.getElementById('casesButton')?.addEventListener('click', () => navigateTo('cases'));
}

function initializeFooter() {
    // Footer-specific initialization if needed
}

function navigateTo(page) {
    const buttons = ['homeButton', 'articlesButton', 'casesButton'];
    buttons.forEach(buttonId => {
        const button = document.getElementById(buttonId);
        if (button) button.classList.remove('active');
    });
    
    const activeButton = document.getElementById(`${page}Button`);
    if (activeButton) activeButton.classList.add('active');
    
    console.log(`Navigating to ${page}`);
}

function initializeSearch() {
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    
    if (searchButton && searchInput && searchResults) {
        searchButton.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
        
        // Real-time search with debounce
        searchInput.addEventListener('input', function() {
            clearTimeout(this.timer);
            this.timer = setTimeout(performSearch, 300);
        });
        
        // Hide results when clicking outside
        document.addEventListener('click', function(e) {
            if (!searchInput.contains(e.target) && !searchResults.contains(e.target) && !searchButton.contains(e.target)) {
                searchResults.style.display = 'none';
            }
        });
    }
}

function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    
    if (!searchInput || !searchResults) return;
    
    const query = searchInput.value.trim().toLowerCase();
    searchResults.innerHTML = '';
        
    if (query.length === 0) {
        searchResults.style.display = 'none';
        return;
    }
    
    // Search through all content
    const allContent = [...websiteContent.articles, ...websiteContent.cases];
    const results = allContent.filter(item => {
        // Check title, description, content, and keywords
        return item.title.toLowerCase().includes(query) ||
               item.description.toLowerCase().includes(query) ||
               item.content.toLowerCase().includes(query) ||
               item.keywords.some(keyword => keyword.toLowerCase().includes(query));
    });
    
    if (results.length > 0) {
        results.forEach(item => {
            const resultItem = document.createElement('div');
            resultItem.className = 'search-result-item';
            
            // Highlight matching text
            const highlightedTitle = highlightMatches(item.title, query);
            const highlightedDesc = highlightMatches(item.description, query);
            
            resultItem.innerHTML = `
              <div class="search-result-type">${item.id < 100 ? 'Article' : 'Case Study'}</div>
              <h4>${highlightedTitle}</h4>
              <p>${highlightedDesc}</p>
              <div class="search-result-keywords">
                  ${item.keywords.filter(k => k.toLowerCase().includes(query))
                    .map(k => `<span>${highlightMatches(k, query)}</span>`)
                    .join('')}
              </div>
            `;
            
            resultItem.addEventListener('click', function() {
                window.location.href = item.url;
            });
            
            searchResults.appendChild(resultItem);
        });
        searchResults.style.display = 'block';
    } else {
        const noResults = document.createElement('div');
        noResults.className = 'search-result-item no-results';
        noResults.textContent = 'No results found for your search. Try different keywords.';
        searchResults.appendChild(noResults);
        searchResults.style.display = 'block';
    }
}

function highlightMatches(text, query) {
    if (!query) return text;
    
    const regex = new RegExp(query, 'gi');
    return text.replace(regex, match => 
        `<span class="highlight">${match}</span>`
    );
}
