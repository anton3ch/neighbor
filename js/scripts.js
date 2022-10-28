// Business logic


function transformToStringArr (number, arr) {
  for(let i = 0; i <= number; i++){
    arr.push(i.toString());
  }
}

function beepBoop(arr) {
  for(let i = 0; i < arr.length; i++){
    if(arr[i].includes("3") === true) {
      createWontYouBeMyNeighbor();
    } else if (arr[i].includes("2") === true) {
      createBoop();
    } else if (arr[i].includes("1") === true) {
      createBeep();
    } else {
      console.log(arr[i]);
    }
  }
}




//UI

function createBeep(){
  const img = document.createElement("img");
  document.body.append(img);
  img.setAttribute("src", "../img/beep.png");
  img.setAttribute("class", "ghost");
  img.setAttribute("width", "150px");
  img.setAttribute("alt", "Beep!");
  //list
  const li = document.createElement('li');
  const ul = document.querySelector("ul");
  li.append("Beep!");
  ul.append(li);
}

function createBoop(){
  const img = document.createElement("img");
  document.body.append(img);
  img.setAttribute("src", "../img/boop.png");
  img.setAttribute("class", "ghost");
  img.setAttribute("width", "150px");
  img.setAttribute("alt", "Boop!");
  //list
  const li = document.createElement('li');
  const ul = document.querySelector("ul");
  li.append("Beep!");
  ul.append(li);
}

function createWontYouBeMyNeighbor(){
  const img = document.createElement("img");
  document.body.append(img);
  img.setAttribute("src", "../img/neighbor.png");
  img.setAttribute("class", "ghost");
  img.setAttribute("width", "150px");
  img.setAttribute("alt", "Beep!");
    //list
    const li = document.createElement('li');
    const ul = document.querySelector("ul");
    li.append("Won't you be my neighbor?");
    ul.append(li);
}

function createNumber(){
  const img = document.createElement("img");
  document.body.append(img);
  img.setAttribute("src", "../img/neighbor.png");
  img.setAttribute("class", "ghost");
  img.setAttribute("width", "150px");
  img.setAttribute("alt", "Beep!");
  //list
  const li = document.createElement('li');
  const ul = document.querySelector("ul");
  li.append("Won't you be my neighbor?");
  ul.append(li);
}

function handleForm(){
  const form = document.getElementById("form");
  form.addEventListener("submit", function(event){
    event.preventDefault();
    const userNum = document.getElementById("number").value;
    const userName = document.getElementById("name").value;
    document.getElementById("output").removeAttribute("class")

    let stringArr = [];
    transformToStringArr(userNum, stringArr);

    beepBoop(stringArr);

    
    document.getElementById("formNest").setAttribute("class", "animate__animated animate__fadeOut");
  });
};




window.addEventListener("load", function(){
  const start = document.getElementById("start");

  start.addEventListener("click", function(){
    document.getElementById("formNest").setAttribute("class", "animate__animated animate__fadeIn");
    start.setAttribute("class", "hidden");
  });
  handleForm();
});





