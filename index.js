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
console.log("Моя отметка - 60 балла(ов)\n" + 
            "1)На странице есть цитата и кнопка для смены цитаты +5\n" +
            "2)В футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5\n" + 
            "3)При загрузке страницы приложения отображается рандомная цитата +10\n" + 
            "4)При перезагрузке страницы цитата обновляется (заменяется на другую) +10\n" + 
            "5)Есть кнопка, при клике по которой цитата обновляется (заменяется на другую) +10\n" + 
            "6)Смена цитаты сопровождается любым другим эффектом, например, изменяется изображение или меняется фоновый цвет страницы, или проигрывается звук и т.д +10\n" + 
            "7)Можно выбрать один из двух языков отображения цитат: en/ru или en/be +10\n" + 
            "8)Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения +0");
