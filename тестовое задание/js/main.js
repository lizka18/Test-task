// Диалоговое окно
let updateButton = document.getElementsByClassName("buy-btn");
let cancelButton = document.getElementById('cancel');
let favDialog = document.getElementById('dialog');
let byButton = document.getElementById('form-btn'); 
   
for (let i =0; i<updateButton.length; i++){
  updateButton[i].addEventListener('click', function() {
    favDialog.showModal();
  });
}
 

cancelButton.addEventListener('click', function() {
  favDialog.close();
});

byButton.addEventListener('click', function() {
  alert('Спасибо за покупку!');
});



// Кнопка вверх
  const UpBtn = document.getElementById('up-btn');
  window.addEventListener("scroll", scrollCount);
  UpBtn.addEventListener("click", raiseUp);

function scrollCount(){
  let scrolled = window.scrollY;
  let screen = document.documentElement.clientHeight;
  if(scrolled>screen/2){
    UpBtn.classList.remove("up-btn-display");
  } else{
    UpBtn.classList.add("up-btn-display");
  }

}

function raiseUp(){
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    
}

//смена тем 

let btn = document.querySelector(".theme-change");
let theme = document.querySelector("#theme-link");

if (localStorage.getItem('theme')===null){
  localStorage.setItem('theme', 'css/light.css');
}

theme.href = localStorage.getItem('theme');

btn.addEventListener("click", function() {
  if (localStorage.getItem('theme') == "css/light.css") {
    theme.href = "css/dark.css";
    localStorage.setItem('theme', 'css/dark.css');
  } else {
    theme.href = "css/light.css";
    localStorage.setItem('theme', 'css/light.css');
  }
  
});

// дата

let dateContainer= document.getElementsByClassName("date");
let arr =[];

// чтобы не создавать большой массив с датами, было выполнено автозаполнение следующим образом
let count = 1;
for (let i=0; i<dateContainer.length; i++){
  let date = new Date(2023, 3, count);
  arr.push(date);
  count+=1;
}


if(localStorage.getItem('arr')=== null){
  localStorage.setItem('arr', arr);
}


function getWeak(date){ 
  let numWeak=0;
  let day = date.getDate();
  if (day<7 & day>=0){
    numWeak=1;
  }else if (day>=7 & day<14){
    numWeak=2;
  }else if (day>=14 & day<21){
    numWeak=3;
  }else if (day>=21 & day<28){
    numWeak=4;
  }else{
    numWeak=5;
  }
  return numWeak;
}

function generateRandomDate(from, to) {
  return new Date(
    from.getTime() +
      Math.random() * (to.getTime() - from.getTime()),
  );
}



for (let i=0; i<dateContainer.length; i++){
  let date = arr[i];
  let monthsArr = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
  let daysArr = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
  let day = daysArr[date.getDay()];
  let month = monthsArr[date.getMonth()];
  let weak = getWeak(date);
  let year = date.getFullYear();

  dateContainer[i].innerHTML += day + ', ' + weak + ' неделя '+ month + ' ' + year + ' года';
}


