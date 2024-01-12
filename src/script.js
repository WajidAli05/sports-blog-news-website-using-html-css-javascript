async function fetchNews(pageNumber){
    var url = 'https://newsapi.org/v2/everything?' +
          'q=cricket top news&' +
          'from=2024-01-11&' +
          'pageSize=10&'+
          'page='+pageNumber +
          'sortBy=popularity&' +
          'apiKey=94c9a197233c4e1baa1e77c02ac338d4';

var req = new Request(url);
let jsonResponse = await fetch(req);
let response = await jsonResponse.json();
console.log(response);
let str = ``;

for(let article of response.articles){
    str = str + `<div class="card">
    <img src="${article.urlToImage}" />
    <h4>${article.title}</h4>
    <p>${article.description}
    </p>
    <small><strong>Published On: </strong>${article.publishedAt}</small>
    <button><a href="${article.url}" target = "_blank">Read More!</a></button>
    </div>`
}

document.querySelector(".all-news").innerHTML = str;

}

