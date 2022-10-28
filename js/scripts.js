//UI

function createBeep(){
  const img = document.createElement("img");
  document.body.append(img);
  img.setAttribute("src", "../img/beep.png");
  img.setAttribute("class", "beep");
  img.setAttribute("width", "150px");
  img.setAttribute("alt", "Beep!");

}

function handleForm(){
  const form = document.getElementById("form");
  form.addEventListener("submit", function(event){
    event.preventDefault();

    
    createBeep();

    const userNum = document.getElementById("number").value;
    const userName = document.getElementById("name").value;
    document.getElementById("formNest").setAttribute("class", "animate__animated animate__fadeOut");
  });
};




window.addEventListener("load", function(){
  const start = document.getElementById("start");

  start.addEventListener("click", function(){
    document.getElementById("formNest").setAttribute("class", "animate__animated animate__fadeIn");
    start.setAttribute("class", "hidden");
  })
  handleForm()
});




// Business logic

const userInput = userNum;
let stringArr = [];
function transformToStringArr (number) {
  for(let i = 0; i <= number; i++){
    stringArr.push(i.toString());
  }
}

transformToStringArr (userInput);

function beepBoop(arr) {
  for(let i = 0; i < arr.length; i++){
    if(arr[i].includes("3") === true) {
      console.log("Won't you be my neighbor?")
    } else if (arr[i].includes("2") === true) {
      console.log("Boop!")
    } else if (arr[i].includes("1") === true) {
      console.log("Beep!")
    } else {
      console.log(arr[i])
    }
  }
}

beepBoop(stringArr);

