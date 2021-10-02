input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Heart)
    soundExpression.giggle.playUntilDone()
    basic.clearScreen()
})
