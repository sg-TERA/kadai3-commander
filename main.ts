radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(radio.receivedPacket(RadioPacketProperty.SignalStrength))
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(5)
})
radio.setGroup(1)
radio.sendNumber(0)
basic.forever(function () {
	
})
