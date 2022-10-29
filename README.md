# Mr. Roboger's Neighborhood

#### By Anton Ch

#### Mr. Roboger's Neighborhood game

## Technologies Used

* CSS
* HTML
* JavaScript
* Jquery
* Bootstrap
* Animate

## Description

Mr. Roboger's Neighborhood application takes a number from a user and returns a range of numbers from 0 to the user inputted number with substitutions: 'Beep,' 'Boop,' and 'Won't you be my neighbor?' instead of 1, 2, and 3 respectively.

## Setup/Installation Requirements

* Click on or copy and paste this [GitHub Page](https://anton3ch.github.io/neighbor/) into your preferred browser:<br>https://anton3ch.github.io/neighbor/

  ***OR***

* Clone this repository to your Desktop:
  1. Your computer will need to have GIT installed. If you do not currently have GIT installed, follow [these](https://docs.github.com/en/get-started/quickstart/set-up-git) directions for installing and setting up GIT.
  2. Once GIT is installed, clone this repository by typing following commands in your browser:
      ```
      $ cd ~/Desktop
      $ git clone https://anton3ch.github.io/neighbor/
      ```
  3. Open index.html by typing following command: 
      ```
      $ open ~/Desktop/neighbor/index.html
      ```
      ***OR***

      Open "neighbor" folder on your desktop and open "index.html" file in your browser.

## Game Instructions
1. Click "Start" to start the game
2. Enter your name and number
3. See your results
4. Click "Reset" to start over

## Specifications

Describe: transformToStringArr()

Test: "It should return an array of numbers in strings from 0 to the user's inputted number"
Code: transformToStringArr(5);
Expected Output: ["0", "1", "2", "3", "4", "5"]

Describe: beepBoop()

Test: "For numbers that contain a 3, all digits are replaced with "Won't you be my neighbor?". Else it's just a number"
Code: beepBoop(3)
Expected Output: ["0", "1", "2", "Won't you be my neighbor?"]

Test: "All digits with the number 2 are replaced with "Boop!"
Code: beepBoop(3)
Expected Output: ["0", "1", "Boop!", "Won't you be my neighbor?"]

Test: "All digits with the number 1 are replaced with "Beep!"
Code: beepBoop(3)
Expected Output: ["0", "Beep!", "Boop!", "Won't you be my neighbor?"]

Test: "The hierarchy of substitutions that should be followed: 3 over 2, 2 over 1"
Code: beepBoop(13)
Expected Output: ["0", "Beep!", "Boop!", "Won't you be my neighbor?", "4", "5", "6", "7", "8", "9", "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?"]
 
## Known Bugs

* if the reset button is clicked before the list is complete the rest of the list will be added before the next iteration

## License

MIT

Copyright (c) 10/28/2022 Anton Ch

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.