
//first 10 news from page 1 are fetched as the html loads completely
document.addEventListener("DOMContentLoaded" , ()=>{
    fetchNews(1);
})

let str = ``;
async function fetchNews(pageNumber){
    var url = 'https://newsapi.org/v2/everything?' +
          'q=cricket news&' +
          'from=2024-01-11&' +
          'pageSize=10&'+
          'page='+pageNumber +
          'sortBy=popularity&' +
          'apiKey=YOUR_API_KEY_GOES_HERE';

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

}

