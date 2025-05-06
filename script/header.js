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
          url: "https://imaging-uganda-africa.com/articles/liver-ultrasound",
          keywords: ["Liver", "Liver Ultrasound", "Hepatic cysts", "hemangioma", "liver masses", "Hydatid cyst"]
        },
        {
          id: 2,
          title: "Biliary hamartoma",
          description: "Explanation of the ultrasound features of biliary hamartoma.",
          content: "Meaning of biliary hamartoma, clinical presentation ultrasound features, differential diagnosis, Advanced Ultrasound Techniques and Clinical Significance of biliary hamartoma",
          url: "https://imaging-uganda-africa.com/articles/biliary-hamartoma",
          keywords: ["biliary hamartoma", "liver", "von Meyenburg complexes", "VMC"]
        },
        {
          id: 3,
          title: "Glycogen storage disease",
          description: "Description of glycogen storage disease.",
          content: "indications, ultrasound features, disease specific findings, complications and monitering of glycogen storage disease",
          url: "https://imaging-uganda-africa.com/articles/glycogenosis",
          keywords: ["glycogen", "glycogenosis", "liver",]
        },
        {
          id: 4,
          title: "Cirrhosis",
          description: "Ultrasound findings in cirrhosis.",
          content: "What is cirrhosis, Clinical presentation, Ultrasound features, Doppler Ultrasound in Cirrhosis and Complications of cirrhosis on Ultrasound",
          url: "https://imaging-uganda-africa.com/articles/cirrhosis-ultrasound",
          keywords: ["cirrhosis", "glycogenosis", "liver",]
        },
        {
          id: 5,
          title: "Liver candidiasis",
          description: "Ultrasound findings in liver candidiasis.",
          content: "Meaning of liver candidiasis, clinical presentation, Ultrasound features, differential diagnosis and management implications of liver candidiasis",
          url: "https://imaging-uganda-africa.com/articles/liver-candidiasis",
          keywords: ["Liver", "candidiasis",]
        },
        {
          id: 6,
          title: "Peribiliary cysts",
          description: "Ultrasound findings of peribiliary cysts.",
          content: "description of peribiliary cysts, ultrasound features, Differential Diagnosis, and Management of peribiliary cysts",
          url: "https://imaging-uganda-africa.com/articles/peribiliary-cysts",
          keywords: ["Peribiliary cysts", "liver",]
        },
        {
          id: 7,
          title: "Polycystic liver disease",
          description: "Ultrasound features of polycystic liver disease.",
          content: "description of peribiliary cysts, ultrasound features, Differential Diagnosis, and Management of peribiliary cysts",
          url: "https://imaging-uganda-africa.com/articles/polycystic-liver",
          keywords: ["polycystic liver", "PLD", "liver",]
        },
        {
          id: 8,
          title: "Portal hypertension",
          description: "Ultrasound features of portal hypertension.",
          content: "Description of portal hypertension, ultrasound features and associated findings of peribiliary cysts",
          url: "https://imaging-uganda-africa.com/articles/portal-hypertension",
          keywords: ["portal hypertension", "cirrhosis", "dilated portal veins",]
        },
        {
          id: 9,
          title: "Schistosomiasis",
          description: "Ultrasound features of heptic schistosomiais.",
          content: "Description of hepatic schistosomiais, ultrasound features, pathophysiology, clinical presentation and prognosis of hepatic schistosomiasis",
          url: "https://imaging-uganda-africa.com/articles/schistosomiasis",
          keywords: ["hepatic schistosomiasis", "schistosomiais", "liver",]
        },
        {
          id: 10,
          title: "Spleen ultrasound",
          description: "Detailes of splenic ultrasound.",
          content: "Anatomy, indication, normal findings as well as pathological findings during splenic ultrasound",
          url: "https://imaging-uganda-africa.com/articles/spleen/spleen.html",
          keywords: ["Spleen", "Splenic ultrasound", "Spleen masses",]
        },
        {
          id: 11,
          title: "Splenomegaly",
          description: "Splenomegaly and ultrasound.",
          content: "Details of clinical presentation, ultrasound findings and possible causes of splenomegaly",
          url: "https://imaging-uganda-africa.com/articles/spleen/splenomegaly.html",
          keywords: ["Spleen", "Splenomegaly", "Enlarged spleen", "Splenic masses"]
        },
        {
          id: 12,
          title: "Splenic cyst",
          description: "Ultrasound features of Splenic cysts.",
          content: "Range of ultrasound image appearences of splenic cysts and there classifation",
          url: "https://imaging-uganda-africa.com/articles/spleen/splenic-cysts.html",
          keywords: ["Splenic cyst", "Spleen", "hydatid spleen cyst", "Infected splenic cyst", "hemorrhagic splenic cyst", "simple splenic cysts"]
        },
        {
          id: 13,
          title: "Splenic Trauma",
          description: "Ultrasound features of Splenic cysts.",
          content: "Splenic trauma, range of image appearences FAST and grading of splenic injuries",
          url: "https://imaging-uganda-africa.com/articles/spleen/splenic-trauma.html",
          keywords: ["Splenic trauma", "FAST", "EFAST", "E-FAST", "extended focused assessment with sonography in trauma", "spleen hematoma", "subcapsular hematoma", "Spleen laceration", "Splenic rapture"]
        },
        {
          id: 14,
          title: "Biliary tree ultrasound",
          description: "The biliary tree is a branching system of ducts that delivers bile produced in the hepatic parenchyma toward the gallbladder and duodenum.",
          content: "Biliary tree anatomy, Bile ducts, Indications, scanning technique, normal findings and pathological findings",
          url: "https://imaging-uganda-africa.com/articles/biliary-tree/biliary-tree.html",
          keywords: ["Biliary tree anatomy, Bile ducts, Biliary tree, Biliary trees, Hepatobiliary, gallbladder"]
        },
        {
          id: 15,
          title: "Biliary tree infections",
          description: "Ultrasound of biliary tree and its infections.",
          content: "Ascending cholangitis, Liver fluke infections, Reccurent pyogenic cholangitis, Biliary ascariasis, and HIV cholangiopathy",
          url: "https://imaging-uganda-africa.com/articles/biliary-tree/biliary-tree-infection.html",
          keywords: ["SAcute cholangitis, Liver fluke infection, Biliary ascariasis, HIV cholangiopathy, cholangitis, Bacterial acute cholangitis (BAC), Obstructive cholangitis, Ascending cholangitis, Acute ascending cholangitis, acute ascending cholangitis, Hepatobiliary"]
        },
        {
          id: 16,
          title: "Gallbladder ultrasound",
          description: "Gallbladder ultrasound technique and interpretation.",
          content: "Gallbladder anatomy, clinical indections, Normal sonographic findings, and pathological findings",
          url: "https://imaging-uganda-africa.com/articles/biliary-tree/gallbladder.html",
          keywords: ["Gallbladder ultrasound, Gallbladder sonography , gallbladder carcinoma, cholelithiasis, cholecystitis, acute cholecystitis chronic cholecystitis, gallbladder adenomyosis, Hepatobiliary"]
        },
          {
          id: 17,
          title: "Pancreatic ultrasound",
          description: "Pancreatic ultrasound technique and interpretation.",
          content: "Pancreatic anatomy, clinical indections, Normal sonographic findings, and pathological findings",
          url: "https://imaging-uganda-africa.com/articles/pancreas/pancreas",
          keywords: ["Pancreas ultrasound, Pancreatic sonography, Pancreatitis, Pancreatic cancer, Pancreatic cysts, Imaging Uganda/Africa, Endocrine pancreas, Exocrine pancreas"]
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
        {
          id: 103,
          title: "Acute Splenic sequestration",
          description: "An 8-year-old male with HbSS disease complaining of left upper quadrant pain.",
          content: "Presentation, Pysical examination, ultrasound findings, diagnosis and the differential diagnoses of acute splenic sequestration.",
          url: "https://imaging-uganda-africa.com/cases/acute-splenic-sequestration.html",
          keywords: ["Spleen", "Sequestration", "Sickle cell"]
        },
        {
          id: 104,
          title: "Ectopic pregnancy - Ultrasound case",
          description: "A 28-year-old female with right lower quadrant pain and vaginal spotting.",
          content: "Presentation, Emergency findings, ultrasound findings, diagnosis and the differential diagnoses of ectopic pregnancy.",
          url: "https://imaging-uganda-africa.com/cases/ectopic-pregnancy.html",
          keywords: ["Ectopic pregnancy", "EUP", "Ring of fire", "Extrauterine pregnancy", "Hemoperitoneum"]
        },
        {
          id: 105,
          title: "Cholangitis - Ultrasound case",
          description: "A 72-year-old male with fever, jaundice, and RUQ pain (Charcot's triad).",
          content: "Presentation, Emergency findings, ultrasound findings, diagnosis and the differential diagnoses of acute cholangitis.",
          url: "https://imaging-uganda-africa.com/cases/cholangitis.html",
          keywords: ["Acute cholangitis", "cholangitis", "Bacterial acute cholangitis (BAC)", "Obstructive cholangitis", "Ascending cholangitis", "Acute ascending cholangitis", "acute ascending cholangitis"]
        },
        {
          id: 106,
          title: "Hepatic abscess - Ultrasound case",
          description: "A 22-year-old male with fever (39.1°C) and RUQ pain for 5 days.",
          content: "Presentation, ultrasound findings, diagnosis and the differential diagnoses of acute cholangitis.",
          url: "https://imaging-uganda-africa.com/cases/liver-abscess-1",
          keywords: ["Hepatic abscess", "Pyogenic liver abscess", "Liver abscess", "Liver abscesses", "Hepatic abscesses", "infection", "infectious disease"]
        },
          {
          id: 107,
          title: "Pancreatic pseudocyst",
          description: "A 45-year-old male with history of recurrent pancreatitis presents with epigastric pain and early satiety",
          content: "Presentation, ultrasound findings, diagnosis and the differential diagnoses of pancreatic pseudocysts.",
          url: "https://imaging-uganda-africa.com/cases/pancreatic-pseudal-cyst-case-1",
          keywords: ["Pancreatic pseudocyst", "Pancreas ultrasound", "Pancreatic cyst", "Pancreatic fluid collection", "Pancreatitis complication", "Imaging Uganda/Africa"]
        },
          {
          id: 108,
          title: "Acute appendicitis",
          description: "Detailed ultrasound case study of acute appendicitis in a pediatric patient.",
          content: "Learn key diagnostic features including non-compressible appendix, target sign, and periappendiceal fat inflammation.",
          url: "https://imaging-uganda-africa.com/cases/acute-appendicitis",
          keywords: ["acute appendicitis", "ultrasound diagnosis", "pediatric appendicitis", "radiology case", "ultrasound findings", "appendicitis imaging"]
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
