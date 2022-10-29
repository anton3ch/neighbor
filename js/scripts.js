// Business logic

function transformToStringArr (number, arr) {
  for(let i = 0; i <= number; i++){
    arr.push(i.toString());
  }
}

function beepBoop(arr) {
  let array = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i].includes("3")) {
      array.push("Won't you be my neighbor?");
    } else if (arr[i].includes("2")) {
      array.push("Boop!");
    } else if (arr[i].includes("1")) {
      array.push("Beep!");
    } else {
      array.push(arr[i]);
    }
  }
  return array;
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
  img.setAttribute("class", "ghost2");
  img.setAttribute("width", "150px");
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
  img.setAttribute("class", "ghost3");
  img.setAttribute("width", "150px");
  setTimeout(function(){
    img.setAttribute("class", "hidden");
  }, 10000);

function handleForm(){
  const form = document.getElementById("form");
  form.addEventListener("submit", function(event){
    event.preventDefault();
    const userNum = document.getElementById("number").value;
    const userName = document.getElementById("name").value;

    let stringArr = [];
    transformToStringArr(userNum, stringArr);
    const h3 = document.getElementById("h3");
    h3.innerText = "Scary Halloween, " + userName + "!";
    beepBoop(stringArr).forEach(function(element, index) {
      setTimeout(function(){
        $('ul#list').append('<li>' + element + '</li>');
      }, index * 250)});
    launchBeep();
    launchBoop();
    launchWontYouBeMyNeighbor();
    $('#output').slideDown();
    document.getElementById("formNest").setAttribute("class", "animate__animated animate__fadeOut");
  });
}




window.addEventListener("load", function(){
  const start = document.getElementById("start");

  handleForm();
  $('button#reset').click(function () {
    $('#output').slideUp();
    $('#list').empty();
    document.getElementById("formNest").setAttribute("class", "animate__animated animate__fadeIn");
  });
    

  // });
  start.addEventListener("click", function(){
    document.getElementById("formNest").setAttribute("class", "animate__animated animate__fadeIn");
    start.setAttribute("class", "hidden");
  });
});





