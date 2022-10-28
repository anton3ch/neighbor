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
