const userInput = 7;
let stringArr = [];

function transformToStringArr (number) {
  for(let i = 0; i <= number; i++){
    stringArr.push(i.toString());
  }
}

beepBoop()