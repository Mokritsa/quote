var myData = {};
var myDataRu = {};
const arrColor = ["red", "maroon", "yellow", "olive", "lime", "green", "aqua", "teal", "blue", "navy", "fuchsia", "purple", "white", "silver", "gray", "rgb(26, 24, 24)"]

fetch("quotes.json")
  .then(response => response.json())
  .then(json => {
    myDataRu.cont = json;
    let quotesNumber = Math.round(Math.random() * 100);
    content.textContent = myDataRu.cont[quotesNumber].text;
    author.textContent = myDataRu.cont[quotesNumber].author;
  });

const url = "https://type.fit/api/quotes";
async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  myData.cont = data;
}
getData();
//Выбор языка страницы
const switchLng = document.querySelector('.switch-lng');
switchLng.addEventListener('click', (event) => {
  if(event.target.classList.contains('lng')){
    if (!event.target.classList.contains('is-active')){
      changeClassActive('.lng.is-active'); 
      event.target.classList.toggle('is-active');
      btnQuote.click();
    }
    
  } 
});

function changeClassActive(className){
  const activeBtn = document.querySelector(className);
  activeBtn.classList.toggle('is-active'); 
}

const btnQuote = document.querySelector(".quote-button");
const content = document.querySelector(".content");
const author = document.querySelector(".author");
btnQuote.addEventListener("click", (event) => {
  if(document.querySelector('.lng.is-active').dataset.namelng == 'en'){
    let quotesNumber = Math.round(Math.random() * 1642);
    content.textContent = myData.cont[quotesNumber].text;
    author.textContent = myData.cont[quotesNumber].author;
    btnQuote.textContent = "Quote generation";
  }
  else{
    let quotesNumber = Math.round(Math.random() * 99);
    content.textContent = myDataRu.cont[quotesNumber].text;
    author.textContent = myDataRu.cont[quotesNumber].author;
    btnQuote.textContent = "Генератор цитат";
  }
  document.documentElement.style.setProperty('--mainBlack', arrColor[Math.round(Math.random() * 15)]);
});
