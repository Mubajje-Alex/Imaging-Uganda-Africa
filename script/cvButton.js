document.addEventListener('DOMContentLoaded', function() {
  // Map each founder to their CV URL
  const cvUrls = {
    'Mwanje Pishon': 'https://imaging-uganda-africa.com/mwanje-pishon-cv#google_vignette',
    'LAMECK': 'https://imaging-uganda-africa.com/lameck-cv#google_vignette',
    'SSENYONGA HENRY': 'https://imaging-uganda-africa.com/ssenyonga-henry',
  };

  // Add click event to all buttons
  document.querySelectorAll('.view-cv-btn').forEach(button => {
    button.addEventListener('click', function() {
      const founder = this.getAttribute('data-founder');
      if (cvUrls[founder]) {
        window.location.href = cvUrls[founder]; // Open in same tab
      } else {
        console.error('CV not found for:', founder);
      }
    });
  });
});