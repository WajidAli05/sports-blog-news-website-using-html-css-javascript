let newsPageNumber = 1;
let newsNumber = 10;
//first 10 news from page 1 are fetched as the html loads completely
document.addEventListener("DOMContentLoaded" , ()=>{
    fetchNews(newsPageNumber , newsNumber);
})

let str = ``;
async function fetchNews(newsPageNumber , newsNumber){
    let currentDate = new Date();
    var url = 'https://newsapi.org/v2/everything?' +
          'q=cricket news&' +
          `from=${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDate() - 2}&` +
          `pageSize=${newsNumber}&`+
          `page=${newsPageNumber}`+ // this is actually the page number the api will bring news from
          'sortBy=popularity&' +
          'apiKey=94c9a197233c4e1baa1e77c02ac338d4';

var req = new Request(url);
let jsonResponse = await fetch(req);
let response = await jsonResponse.json();
console.log(response);


for(let article of response.articles){
    str = str + `<div class="news_card">
    <img src="${article.urlToImage}" />
    <h4>${article.title}</h4>
    <p>${article.description}
    </p>
    <small><strong>Published On: </strong>${article.publishedAt}</small>
    <button><a href="${article.url}" target = "_blank">Read More</a></button>
    </div>`
}

document.querySelector(".all-news").innerHTML = str;

//fetch news from the same page until all the news are fetched. Once this page ends, then move to other pages
if(newsPageNumber <= response.totalResults){
    newsPageNumber++;
    newsNumber = 10;
}
else{
    newsNumber = newsNumber + 10;
}
}

