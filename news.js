window.addEventListener("online", function (event) {
    const allNews = readNewsFromLocalStorage();
    sendNewsToServer(allNews);
    showAllNews(allNews);
    localStorage.removeItem("news");
});

const allNews = readNewsFromLocalStorage();
if (isOnline()) {
    sendNewsToServer(allNews);
    showAllNews(allNews);
    localStorage.removeItem("news");
}

function addNews(imgSrc, title, body) {
    const newsBlock = document.createElement("div");
    newsBlock.className = "col-sm-6 col-lg-4 mb-4";
    const card = document.createElement("div");
    card.className = "card shadow border-0 h-100";
    card.innerHTML = "<img src=\"" + imgSrc + "\" alt=\"News Image\" class=\"card-img-top p-2\">"
        + "<div class=\"card-body\"><h5 class=\"text-dark\">" + title + "</h5><p class=\"text-muted card-text\">"
        + body + "</p></div>";
    newsBlock.appendChild(card);

    document.getElementById("newsList").appendChild(newsBlock);
}

function showAllNews(allNews) {
    allNews.forEach(function (news) {
        addNews(news.imgSrc, news.title, news.body)
    });
}

function sendNewsToServer(allNews) {
    if (allNews.length) {
        alert("Successfully sent to server!")
    }
}

function readNewsFromLocalStorage() {
    return JSON.parse(localStorage.getItem("news")) != null
        ? JSON.parse(localStorage.getItem("news")) : [];
}

function isOnline() {
    return window.navigator.onLine;
}