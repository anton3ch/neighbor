// Business logic

const userInput = 7;
let stringArr = [];
function transformToStringArr (number) {
  for(let i = 0; i <= number; i++){
    stringArr.push(i.toString());
  }
}

transformToStringArr (userInput);
// For numbers that contain a 1, all digits are replaced with "Beep!"
// For example, all digits of the number 109, 11, or 1 would be replaced with "Beep!"
// For numbers that contain a 2, all digits are replaced with "Boop!"
// For example, all digits of the number 2, 24, or 2099 would be replaced with "Boop!"
// For numbers that contain a 3, all digits are replaced with "Won't you be my neighbor?"
// For example, all digits of the number 39, 3, or 8763 would be replaced with "Won't you be my neighbor?"


function beepBoop(arr) {
  for(let i = 0; i < arr.length; i++){
    if(arr[i].includes("3") === true) {
      console.log("Won't you be my neighbor?")
    } else if (arr[i].includes("2") === true) {
      console.log("Boop!")
    } else {
      console.log(arr[i])
    }
  }
}