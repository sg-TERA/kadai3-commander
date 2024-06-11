input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
    basic.showNumber(1)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
    basic.showNumber(3)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
    basic.showNumber(2)
})
radio.setGroup(9)
radio.sendNumber(123456789)
