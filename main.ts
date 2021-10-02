input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Heart)
    soundExpression.giggle.playUntilDone()
    basic.clearScreen()
})
