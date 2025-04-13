document.addEventListener('DOMContentLoaded', function() {
    // Navigation buttons
    const homeButton = document.getElementById('homeButton');
    const articlesButton = document.getElementById('articlesButton');
    const casesButton = document.getElementById('casesButton');
    
    // Search elements
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const searchResults = document.getElementById('searchResults');
    
    // Website content data - this would ideally come from your CMS or API
    const websiteContent = {
      articles: [
        {
          id: 1,
          title: "Liver Ultrasound",
          description: "Detailed explanation of liver ultrasound",
          content: "Includes indications, techinique, normal findings as well as pathological findings during liver ultrasound",
          url: "https://imaging-uganda-africa.com/articles/liver/liver.html",
          keywords: ["Liver", "Liver Ultrasound", "Hepatic cysts", "hemangioma", "liver masses", "Hydatid cyst"]
        },
        {
          id: 2,
          title: "Biliary hamartoma",
          description: "Explanation of the ultrasound features of biliary hamartoma.",
          content: "Meaning of biliary hamartoma, clinical presentation ultrasound features, differential diagnosis, Advanced Ultrasound Techniques and Clinical Significance of biliary hamartoma",
          url: "https://imaging-uganda-africa.com/articles/liver/biliary-hamartoma.html",
          keywords: ["biliary hamartoma", "liver", "von Meyenburg complexes", "VMC"]
        },
        {
          id: 3,
          title: "Glycogen storage disease",
          description: "Description of glycogen storage disease.",
          content: "indications, ultrasound features, disease specific findings, complications and monitering of glycogen storage disease",
          url: "https://imaging-uganda-africa.com/articles/liver/glycogenosis.html",
          keywords: ["glycogen", "glycogenosis", "liver",]
        },
        {
          id: 4,
          title: "Cirrhosis",
          description: "Ultrasound findings in cirrhosis.",
          content: "What is cirrhosis, Clinical presentation, Ultrasound features, Doppler Ultrasound in Cirrhosis and Complications of cirrhosis on Ultrasound",
          url: "https://imaging-uganda-africa.com/articles/liver/cirrhosis.html",
          keywords: ["cirrhosis", "glycogenosis", "liver",]
        },
        {
          id: 5,
          title: "Liver candidiasis",
          description: "Ultrasound findings in liver candidiasis.",
          content: "Meaning of liver candidiasis, clinical presentation, Ultrasound features, differential diagnosis and management implications of liver candidiasis",
          url: "https://imaging-uganda-africa.com/articles/liver/liver-candidiasis.html",
          keywords: ["Liver", "candidiasis",]
        },
        {
          id: 6,
          title: "Peribiliary cysts",
          description: "Ultrasound findings of peribiliary cysts.",
          content: "description of peribiliary cysts, ultrasound features, Differential Diagnosis, and Management of peribiliary cysts",
          url: "https://imaging-uganda-africa.com/articles/liver/peribiliary-cysts.html",
          keywords: ["Peribiliary cysts", "liver",]
        },
        {
          id: 7,
          title: "Polycystic liver disease",
          description: "Ultrasound features of polycystic liver disease.",
          content: "description of peribiliary cysts, ultrasound features, Differential Diagnosis, and Management of peribiliary cysts",
          url: "https://imaging-uganda-africa.com/articles/liver/polycystic-liver.html",
          keywords: ["polycystic liver", "PLD", "liver",]
        },
        {
          id: 8,
          title: "Portal hypertension",
          description: "Ultrasound features of portal hypertension.",
          content: "Description of portal hypertension, ultrasound features and associated findings of peribiliary cysts",
          url: "https://imaging-uganda-africa.com/articles/liver/portal-hypertension.html",
          keywords: ["portal hypertension", "cirrhosis", "dilated portal veins",]
        },
        {
          id: 9,
          title: "Schistosomiasis",
          description: "Ultrasound features of heptic schistosomiais.",
          content: "Description of hepatic schistosomiais, ultrasound features, pathophysiology, clinical presentation and prognosis of hepatic schistosomiasis",
          url: "https://imaging-uganda-africa.com/articles/liver/schistosomiasis.html",
          keywords: ["hepatic schistosomiasis", "schistosomiais", "liver",]
        },
      ],
      cases: [
        {
          id: 101,
          title: "Pelvic Inflammatory Disease (PID)",
          description: "A 28-year-old female with lower abdominal pain, fever and vaginal discharge.",
          content: "About case presentation, Pysical examination, ultrasound findings diagnosis and the differential diagnoses.",
          url: "https://imaging-uganda-africa.com/cases/pid.html",
          keywords: ["PID", "Pelvic Inflammatory Disease", "Cogwheel", "pyosalpinx", "LAP", "Lower abdominal pain", "STIs", "Sexually Transmited Diseases", "Pelvic fluid", "Pouch Of Douglas", "Fluid filled tubes", "Fallopian tubes"]
        },
          {
          id: 102,
          title: "Thyroiditis",
          description: "A 42-year-old female with neck swelling, discomfort and fatigue x 3 weeks.",
          content: "Presentation, Pysical examination, ultrasound findings, diagnosis and the differential diagnoses of Thyroidis.",
          url: "https://imaging-uganda-africa.com/cases/thyroiditis.html",
          keywords: ["Thyroid", "Thyroiditis", "Hashimoto's thyroiditis", "Neck swelling", "goitre", "Diffuse goitre"]
        },
      ]
    };

    // Navigation functionality
    function navigateTo(page) {
      [homeButton, articlesButton, casesButton].forEach(button => {
        button.classList.remove('active');
      });
      event.currentTarget.classList.add('active');
      console.log(`Navigating to ${page}`);
    }
    
    // Enhanced search function
    function performSearch() {
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
    
    // Helper function to highlight matching text
    function highlightMatches(text, query) {
      if (!query) return text;
      
      const regex = new RegExp(query, 'gi');
      return text.replace(regex, match => 
        `<span class="highlight">${match}</span>`
      );
    }
    
    // Event listeners for navigation
    homeButton.addEventListener('click', () => navigateTo('home'));
    articlesButton.addEventListener('click', () => navigateTo('articles'));
    casesButton.addEventListener('click', () => navigateTo('cases'));
    
    // Event listeners for search
    searchButton.addEventListener('click', performSearch);
    
    searchInput.addEventListener('input', function() {
      // Perform search as user types (with slight debounce)
      clearTimeout(this.timer);
      this.timer = setTimeout(performSearch, 300);
    });
    
    searchInput.addEventListener('keyup', function(e) {
      if (e.key === 'Enter') {
          performSearch();
      }
    });
    
  // Hide search results when clicking outside
  document.addEventListener('click', function(e) {
    if (!searchInput.contains(e.target) && !searchButton.contains(e.target)) {
        searchResults.style.display = 'none';
    }
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
});
