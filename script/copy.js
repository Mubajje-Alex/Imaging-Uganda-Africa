// Function to copy div contents
function copyDivContents() {
  const sourceDiv = document.getElementById('sourceDiv');
  const targetDiv = document.getElementById('targetDiv');
  targetDiv.innerHTML = sourceDiv.innerHTML;
}

// Function to handle responsive behavior
function handleResponsiveLayout() {
  const mediaQuery = window.matchMedia('(max-width: 992px)');
  
  function handleTabletChange(e) {
      if (e.matches) {
          // Mobile view - copy contents and hide target
          copyDivContents();
          document.getElementById('targetDiv').style.display = 'block';
      } else {
          // Desktop view - show both divs
          document.getElementById('targetDiv').style.display = 'none';
      }
  }
  
  // Initial check
  handleTabletChange(mediaQuery);
  
  // Listen for changes
  mediaQuery.addListener(handleTabletChange);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', handleResponsiveLayout);

// Also handle window resize (alternative approach)
window.addEventListener('resize', function() {
  if (window.innerWidth <= 992) {
      copyDivContents();
  }
});