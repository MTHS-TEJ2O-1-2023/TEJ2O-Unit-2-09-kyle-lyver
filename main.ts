/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Kyle Lyver
 * Created on: Oct 2023
 * This program plays rock paper scissors
*/

let randomNumber: number = 0
let score: number = 0

input.onGesture(Gesture.Shake, function () {
  randomNumber = randint(0, 2)

  // if randomNumber was 0
  if (randomNumber === 0) {
  basic.showIcon(IconNames.Scissors)
  }

  // if randomNumber was 1
  if (randomNumber == 1) {
    basic.showLeds(`
. . . . .
. # # # .
. # # # .
. # # # .
. . . . .
`)
  }

  // randomNumber was 2
  if (randomNumber == 2) {
    basic.showLeds(`
# # # # #
# . . . #
# . . . #
# . . . #
# # # # #
`)
  }
})

input.onButtonPressed(Button.A, function () {
  score = score + 1
})

input.onButtonPressed(Button.B, function () {
  basic.showNumber(score)
})
