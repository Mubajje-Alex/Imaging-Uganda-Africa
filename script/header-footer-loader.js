// Website content data - moved to global scope so it's accessible to all functions
const websiteContent = {
  articles: [
    // Your article data (same as in your previous code)
    {
      id: 1,
      title: "Liver Ultrasound",
      description: "Detailed explanation of liver ultrasound",
      content: "Includes indications, techinique, normal findings as well as pathological findings during liver ultrasound",
      url: "https://imaging-uganda-africa.com/articles/liver/liver-ultrasound",
      keywords: ["Liver", "Liver Ultrasound", "Hepatic cysts", "hemangioma", "liver masses", "Hydatid cyst"]
    },
    {
      id: 2,
      title: "Biliary hamartoma",
      description: "Explanation of the ultrasound features of biliary hamartoma.",
      content: "Meaning of biliary hamartoma, clinical presentation ultrasound features, differential diagnosis, Advanced Ultrasound Techniques and Clinical Significance of biliary hamartoma",
      url: "https://imaging-uganda-africa.com/articles/liver/biliary-hamartoma",
      keywords: ["biliary hamartoma", "liver", "von Meyenburg complexes", "VMC"]
    },
    {
      id: 3,
      title: "Glycogen storage disease",
      description: "Description of glycogen storage disease.",
      content: "indications, ultrasound features, disease specific findings, complications and monitering of glycogen storage disease",
      url: "https://imaging-uganda-africa.com/articles/liver/glycogenosis",
      keywords: ["glycogen", "glycogenosis", "liver",]
    },
    {
    id: 4,
      title: "Cirrhosis",
      description: "Ultrasound findings in cirrhosis.",
      content: "What is cirrhosis, Clinical presentation, Ultrasound features, Doppler Ultrasound in Cirrhosis and Complications of cirrhosis on Ultrasound",
      url: "https://imaging-uganda-africa.com/articles/liver/cirrhosis-ultrasound",
      keywords: ["cirrhosis", "glycogenosis", "liver",]
    },
    {
    id: 5,
      title: "Liver candidiasis",
      description: "Ultrasound findings in liver candidiasis.",
      content: "Meaning of liver candidiasis, clinical presentation, Ultrasound features, differential diagnosis and management implications of liver candidiasis",
      url: "https://imaging-uganda-africa.com/articles/liver/liver-candidiasis",
      keywords: ["Liver", "candidiasis",]
    },
    {
      id: 6,
      title: "Peribiliary cysts",
      description: "Ultrasound findings of peribiliary cysts.",
      content: "description of peribiliary cysts, ultrasound features, Differential Diagnosis, and Management of peribiliary cysts",
      url: "https://imaging-uganda-africa.com/articles/liver/peribiliary-cysts",
      keywords: ["Peribiliary cysts", "liver",]
    },
    {
      id: 7,
      title: "Polycystic liver disease",
      description: "Ultrasound features of polycystic liver disease.",
      content: "description of peribiliary cysts, ultrasound features, Differential Diagnosis, and Management of peribiliary cysts",
      url: "https://imaging-uganda-africa.com/articles/liver/polycystic-liver",
      keywords: ["polycystic liver", "PLD", "liver",]
    },
    {
      id: 8,
      title: "Portal hypertension",
      description: "Ultrasound features of portal hypertension.",
      content: "Description of portal hypertension, ultrasound features and associated findings of peribiliary cysts",
      url: "https://imaging-uganda-africa.com/articles/liver/portal-hypertension",
      keywords: ["portal hypertension", "cirrhosis", "dilated portal veins",]
    },
    {
      id: 9,
      title: "Schistosomiasis",
      description: "Ultrasound features of heptic schistosomiais.",
      content: "Description of hepatic schistosomiais, ultrasound features, pathophysiology, clinical presentation and prognosis of hepatic schistosomiasis",
      url: "https://imaging-uganda-africa.com/articles/liver/schistosomiasis",
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
    {
      id: 18,
      title: "Appendicitis Ultrasound",
      description: "Ultrasound features of acute and chronic appendicitis with comparison of diagnostic criteria, imaging findings, and differential diagnosis.",
      content: "Clinical indections, Normal sonographic findings, pathological findings, and differential diagnosis",
      url: "https://imaging-uganda-africa.com/articles/git/appendicitis-ultrasound-1",
      keywords: ["appendicitis", "acute appendicitis", "chronic appendicitis", "appendiceal ultrasound", "appendix ultrasound", "appendicular ultrasound", "appendiceal inflammation", "appendiceal pathology", "right iliac fossa pain", "RIF pain"]
    },
    {
      id: 19,
      title: "Appendicitis Imaging diagnosis",
      description: "Ultrasound and CT features, diagnostic criteria and differential diagnosis of appendicitis",
      content: "sonographic findings, CT findings, complications and differential diagnosis for appendicitis",
      url: "https://imaging-uganda-africa.com/articles/git/appendicitis",
      keywords: ["Acute appendicitis", "appendicitis", "appendiceal inflammation", "appendiceal rupture", "appendicolith", "right lower quadrant pain", "RLQ pain", "pediatric appendicitis", "adult appendicitis", "imaging appendicitis", "CT appendiciti"]
    },
    {
      id: 20,
      title: "Appendix Ultrasound",
      description: "Appendix ultrasound as a valuable diagnostic tool for evaluating acute appendicitis and other appendiceal pathologies, particularly in children and young adults",
      content: "sonographic anatomy, indications, technique, normal findings, and pathological findings",
      url: "https://imaging-uganda-africa.com/articles/git/appendix-ultrasound",
      keywords: ["Appendix ultrasound", "Appendicitis sonography", "RLQ pain", "Acute appendicitis", "Appendiceal abscess", "Pediatric appendicitis"]
    },
    {
      id: 21,
      title: "Gastrointestinal Ultrasound",
      description: "Gastrointestinal ultrasound is an essential diagnostic tool for evaluating bowel pathology, including inflammation, obstruction, and tumors.",
      content: "sonographic anatomy, indications, technique, normal findings, and pathological findings of gastrointestinal ultrasound",
      url: "https://imaging-uganda-africa.com/articles/git/git-ultrasound.html",
      keywords: ["GI ultrasound", "Bowel sonography", "Appendicitis", "Crohn's disease", "Intussusception", "Bowel obstruction", "Colonic tumors"]
    },
    {
      id: 22,
      title: "Inflammatory Bowel Disease Ultrasound",
      description: "Ultrasound features, diagnostic criteria and differential diagnosis of inflammatory bowel disease (Crohn's disease and ulcerative colitis)",
      content: "Chron's disease, Ulcerative colitis, sonographic findings, complications and differential diagnosis for inflammatory bowel disease",
      url: "https://imaging-uganda-africa.com/articles/git/ibd-ultrasound",
      keywords: ["IBD ultrasound", "Crohn's disease ultrasound", "ulcerative colitis ultrasound", "bowel wall thickening", "mesenteric fat hypertrophy", "inflammatory bowel disease", "intestinal ultrasound", "gastrointestinal ultrasound"]
    },
    {
      id: 23,
      title: "Ultrasound of Bowel Obstruction",
      description: "Ultrasound features, diagnostic criteria and differential diagnosis of bowel obstruction including mechanical obstruction, paralytic ileus and closed loop obstruction",
      content: "Chron's disease, Ulcerative colitis, sonographic findings, complications and differential diagnosis for inflammatory bowel disease",
      url: "https://imaging-uganda-africa.com/articles/git/io-ultrasound",
      keywords: ["bowel obstruction", "small bowel obstruction", "large bowel obstruction", "paralytic ileus", "closed loop obstruction", "intestinal obstruction", "SBO ultrasound", "LBO"]
    },  
    {
      id: 24,
      title: "Renal ultrasound",
      description: "Comprehensive guide to renal ultrasound techniques for hydronephrosis, stones, infections and tumors - with African case examples and scanning protocols.",
      content: "renal ultrasound techniques, hydronephrosis, renal stones, renal infections, renal tumors, and African case examples",
      url: "https://imaging-uganda-africa.com/articles/urinary-tract/renal-ultrasound",
      keywords: ["Renal ultrasound", "Kidney sonography", "Hydronephrosis diagnosis", "Renal stone ultrasound", "Pyelonephritis","Renal mass", "Tropical kidney pathology", "Kidney tumors ultrasound", "Emergency renal ultrasound"]
    },
    {
      id: 25,
      title: "Prostate ultrasound",
      description: "Comprehensive guide to prostate ultrasound techniques for BPH, cancer, infections - with African case examples and scanning protocols.",
      content: "prostate ultrasound techniques, BPH, prostate cancer, and prostate infections,",
      url: "https://imaging-uganda-africa.com/articles/prostate/prostate-ultrasound",
      keywords: ["Prostate ultrasound", "TRUS", "Prostate cancer diagnosis", "BPH", "Prostatitis", "Prostate biopsy", "Prostate tumors ultrasound"]
    },
    {
      id: 26,
      title: "Utrasound of the uterus",
      description: "Comprehensive guide to uterine ultrasound techniques for fibroids, adenomyosis, cancers, and congenital anomalies - with African case examples and scanning protocols.",
      content: "Uterus ultrasound techniques for fibroids, adenomyosis, cancres and congenital anomalies.",
      url: "https://imaging-uganda-africa.com/articles/uterus/uterus-ultrasound",
      keywords: ["Uterus ultrasound", "Gynecological ultrasound", "Fibroids", "Adenomyosis", "Endometrial cancer", "Uterine anomalies", "gynecology pathology", "Uterine tumors ultrasound"]
    },
    {
      id: 27,
      title: "Thyroid Ultrasound",
      description: "Comprehensive guide to neck ultrasound techniques for thyroid nodules, cancers, and inflammatory conditions - with African case examples and scanning protocols.",
      content: "Guide to neck ultrasound & techniques for thyroid nodules.",
      url: "https://imaging-uganda-africa.com/articles/neck/thyroid-ultrasound",
      keywords: ["Thyroid ultrasound",  "Neck ultrasound", "Thyroid cancer", "Thyroiditis", "Parathyroid ultrasound", "Tropical endocrine pathology", "Thyroid nodules", "Thyroid tumors ultrasound"]
    },
    {
      id: 28,
      title: "Scrotal Ultrasound",
      description: "Comprehensive guide to scrotal ultrasound techniques for testicular tumors, infections, trauma and infertility - with African case examples and scanning protocols.",
      content: "Guide to scrotal ultrasound & techniques for testicular tumors, infectios and trauma.",
      url: "https://imaging-uganda-africa.com/articles/scrotal/scrotal-ultrasound",
      keywords: ["Scrotal ultrasound", "Testicular ultrasound", "Testicular cancer", "Epididymitis", "testicular Varicocele", "pampinform Varicocele", "Testicular tumors"]
    },
    {
      id: 29,
      title: "Pelvic Inflammatory Disease (PID) Ultrasound",
      description: "Ultrasound features, diagnostic criteria and differential diagnosis of Pelvic Inflammatory Disease.",
      content: "Comprehensive guide to PID ultrasound including findings of acute salpingitis, pyosalpinx, TOA, oophoritis, endometritis, and pelvic peritonitis.",
      url: "https://imaging-uganda-africa.com/articles/gynecology/pid",
      keywords: ["PID", "oophoritis", "pelvic inflammatory disease", "tubo-ovarian abscess", "salpingitis", "endometritis", "Fitz-Hugh-Curtis syndrome", "TOA", "ovarian inflammation", "gynecological ultrasound"]
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
    {
      id: 109,
      title: "Intrauterine Pregnancy with IUD in situ",
      description: "Ultrasound case study of coexisting intrauterine pregnancy with IUD in situ at 7 weeks gestation. Learn about ultrasound features, management options, and complications from imaging Uganda/Africa radiology experts.",
      content: "Learn key diagnostic features of early intrauterine pregnancy with iud, including physical exam findings, ultrasound findings, management consideration, differential diagnoses.",
      url: "https://imaging-uganda-africa.com/cases/IUP-with-IUD.html",
      keywords: ["IUD pregnancy", "intrauterine device", "early pregnancy", "contraceptive failure", "IUD complications", "pregnancy with IUD"]
    },
    {
      id: 110,
      title: "Epididymal head cyst",
      description: "Detailed ultrasound case study of Epididymal Head Cyst with imaging findings and differential diagnosis.",
      content: "Detailed ultrasound case study of Epididymal Head Cyst with imaging findings and differential diagnosis",
      url: "https://imaging-uganda-africa.com/cases/epididymal-head-cyst.html",
      keywords: ["Epididymal cyst", "spermatocele", "scrotal ultrasound", "testicular cyst", "male infertility ultrasound", "scrotal mass"]
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
  
  // Remove active class from all buttons first
  document.querySelectorAll('.nav-button').forEach(button => {
    button.classList.remove('active');
  });
  
  // Check which page is active
  if (path.includes('/articles/') || path.endsWith('/articles') || 
      path.includes('articles.html') || path.includes('articles-')) {
    document.getElementById('articlesButton').classList.add('active');
  } 
  else if (path.includes('/cases/') || path.endsWith('/cases') || 
           path.includes('cases.html') || path.includes('cases-')) {
    document.getElementById('casesButton').classList.add('active');
  }
  else if (path.includes('/equipments/') || path.endsWith('/equipments') || 
           path.includes('equipments.html') || path.includes('equipments-')) {
    document.getElementById('equipmenstButton').classList.add('active');
  }
  else {
    // Default to home if no other matches
    document.getElementById('homeButton').classList.add('active');
  }
  
  // Initialize search functionality
  initializeSearch();
  
  // Add navigation event listeners
  document.getElementById('homeButton')?.addEventListener('click', () => {
    window.location.href = 'https://imaging-uganda-africa.com/index.html';
  });
  
  document.getElementById('articlesButton')?.addEventListener('click', () => {
    window.location.href = 'https://imaging-uganda-africa.com/articles.html';
  });
  
  document.getElementById('casesButton')?.addEventListener('click', () => {
    window.location.href = 'https://imaging-uganda-africa.com/cases.html';
  });
  
  document.getElementById('equipmentButton')?.addEventListener('click', () => {
    window.location.href = 'https://imaging-uganda-africa.com/equipments.html';
  });
}

function initializeFooter() {
  // Footer-specific initialization if needed
}

function navigateTo(page) {
  const buttons = ['homeButton', 'articlesButton', 'casesButton', 'equipmentsButton'];
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
