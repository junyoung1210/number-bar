input.onButtonPressed(Button.A, function () {
    number += 5
    OLED.clear()
    OLED.drawLoading(number)
})
input.onGesture(Gesture.Shake, function () {
    number = 0
    OLED.clear()
})
input.onButtonPressed(Button.AB, function () {
    while (number < 100) {
        number += 10
        OLED.clear()
        OLED.drawLoading(number)
    }
})
input.onButtonPressed(Button.B, function () {
    number += -5
    OLED.clear()
    OLED.drawLoading(number)
})
let number = 0
OLED.init(128, 64)
number = 0
