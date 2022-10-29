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
      createNumber(arr[i]);
    }
  }
}

//UI

function createBeep(){
  //list
  const li = document.createElement('li');
  const ul = document.querySelector("ul");
  li.append("Beep!");
  ul.append(li);
}
function launchBeep(){
  const img = document.getElementById("img1");
  document.body.append(img);
  img.setAttribute("src", "../img/beep.png");
  img.setAttribute("class", "ghost");
  img.setAttribute("width", "150px");
  // img.setAttribute("alt", "Beep!");
  setTimeout(function(){
    img.setAttribute("class", "hidden");
  }, 5000);
}

function createBoop(){
  const li = document.createElement('li');
  const ul = document.querySelector("ul");
  li.append("Boop!");
  ul.append(li);
}

function launchBoop(){
  const img = document.getElementById("img2");
  document.body.append(img);
  img.setAttribute("src", "../img/boop.png");
  img.setAttribute("class", "ghost2");
  img.setAttribute("width", "150px");
  // img.setAttribute("alt", "Boop!");
  setTimeout(function(){
    img.setAttribute("class", "hidden");
  }, 5000);
}

function createWontYouBeMyNeighbor(){
  const li = document.createElement('li');
  const ul = document.querySelector("ul");
  li.append("Won't you be my neighbor?");
  ul.append(li);
}

function launchWontYouBeMyNeighbor(){
  const img = document.getElementById("img3");
  document.body.append(img);
  img.setAttribute("src", "../img/neighbor.png");
  img.setAttribute("class", "ghost3");
  img.setAttribute("width", "150px");
  // img.setAttribute("alt", "Won't you be my neighbor?");
  setTimeout(function(){
    img.setAttribute("class", "hidden");
  }, 10000);

}

function createNumber(number){

  //list
  const li = document.createElement('li');
  const ul = document.querySelector("ul");
  li.append(`${number}`);
  ul.append(li);
}

function handleForm(){
  const form = document.getElementById("form");
  form.addEventListener("submit", function(event){
    event.preventDefault();
    const userNum = document.getElementById("number").value;
    const userName = document.getElementById("name").value;
    document.getElementById("output").removeAttribute("class");

    let stringArr = [];
    transformToStringArr(userNum, stringArr);
    const h3 = document.getElementById("h3");
    h3.innerText = "Scary Halloween, " + userName + "!";
    beepBoop(stringArr);
    launchBeep();
    launchBoop();
    launchWontYouBeMyNeighbor();
    $('#output').show();
    document.getElementById("formNest").setAttribute("class", "animate__animated animate__fadeOut");
  });
}




window.addEventListener("load", function(){
  const start = document.getElementById("start");
  const reset = document.getElementById("reset");

  handleForm();
    $('button#reset').click(function () {
      $('#list').empty();
      $('#output').hide();
      document.getElementById("formNest").setAttribute("class", "animate__animated animate__fadeIn");
  });
    

  // });
  start.addEventListener("click", function(){
    document.getElementById("formNest").setAttribute("class", "animate__animated animate__fadeIn");
    start.setAttribute("class", "hidden");
  });
});





