const API_KEY = "your_api_key_here";
const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener("load", () => fetchNews("India"));

function reload() {
    document.getElementById('loading').style.display = 'block'; // Show loading indicator
    setTimeout(() => {
        window.location.reload(); // Reload after a short delay
    }, 100); // Adjust delay as needed
}

async function fetchNews(query) {
    const loadingIndicator = document.getElementById('loading');
    loadingIndicator.style.display = 'block'; // Show loading indicator

    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data = await res.json();
    bindData(data.articles);

    loadingIndicator.style.display = 'none'; // Hide loading indicator
}

function bindData(articles) {
    const cardsContainer = document.getElementById("cards-container");
    const newsCardTemplate = document.getElementById("template-news-card");

    cardsContainer.innerHTML = "";

    articles.forEach((article) => {
        if (!article.urlToImage) return;
        const cardClone = newsCardTemplate.content.cloneNode(true);
        fillDataInCard(cardClone, article);
        cardsContainer.appendChild(cardClone);
    });
}

function fillDataInCard(cardClone, article) {
    const newsImg = cardClone.querySelector("#news-img");
    const newsTitle = cardClone.querySelector("#news-title");
    const newsSource = cardClone.querySelector("#news-source");
    const newsDesc = cardClone.querySelector("#news-desc");

    newsImg.src = article.urlToImage;
    newsTitle.innerHTML = article.title;
    newsDesc.innerHTML = article.description;

    const date = new Date(article.publishedAt).toLocaleString("en-US", {
        timeZone: "Asia/Kolkata",
    });

    newsSource.innerHTML = `${article.source.name} · ${date}`;

    cardClone.firstElementChild.addEventListener("click", () => {
        window.open(article.url, "_blank");
    });
}

let curSelectedNav = null;
function onNavItemClick(id) {
    fetchNews(id);
    if (curSelectedNav) {
        document.getElementById(curSelectedNav).classList.remove("active");
    }
    curSelectedNav = id;
    document.getElementById(curSelectedNav).classList.add("active");
}

// Search functionality
document.getElementById("search-button").addEventListener("click", () => {
    searchNews();
});

// Add functionality to search when pressing Enter key
document.getElementById("search-text").addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        searchNews();
    }
});

function searchNews() {
    const searchQuery = document.getElementById("search-text").value.trim();
    if (searchQuery) {
        fetchNews(searchQuery);
    }
}
