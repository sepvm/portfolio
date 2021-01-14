var dataURL = "http://newsapi.org/v2/everything?q=gaming&from=2020-12-15&to=2020-12-15&sortBy=popularity&apiKey=ee16515aee424985ab81d1be5a92a7f4";

function convertToJson(response){
    return response.json();
}

function processData(data){
    console.log(data);

    for (var i = 0; i < data.articles.length; i++) {
        document.querySelector("#customername") .innerHTML += "<li>" + data.articles[i].author + "</li>";
        document.querySelector("#customername") .innerHTML += "<li>" + data.articles[i].title + "</li>";
        document.querySelector("#customername") .innerHTML += "<li>" + data.articles[i].description + "</li>";
        document.querySelector("#customername") .innerHTML += "<li>" + data.articles[i].url + "</li>";
        document.querySelector("#customername") .innerHTML += "<img class ='images' src = '" + data.articles[i].urlToImage + "' />";
        document.querySelector("#customername") .innerHTML += "<li>" + data.articles[i].publishedAt + "</li>";
        document.querySelector("#customername") .innerHTML += "<li>" + data.articles[i].content + "</li>";
    }

}

fetch(dataURL)
.then (convertToJson)
.then(processData)
.catch(function(err) {console.log('Fetch Error :-S', err)});






