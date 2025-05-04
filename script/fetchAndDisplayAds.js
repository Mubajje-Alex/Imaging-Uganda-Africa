// Replace with your RSS feed URL
const RSS_URL = "https://https://imaging-uganda-africa.com/feed";

// Fetch and parse RSS (using rss2json.com or similar API)
fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}`)
  .then(response => response.json())
  .then(data => {
    const feedContainer = document.getElementById('rss-feed');
    data.items.forEach(item => {
      const article = `
        <div class="article">
          <h2><a href="${item.link}">${item.title}</a></h2>
          <p>${item.description}</p>
        </div>
      `;
      feedContainer.innerHTML += article;
    });
  });