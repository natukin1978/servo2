servos.P0.setPulse(1500)
servos.P1.setPulse(1500)
servos.P0.run(0)
servos.P1.run(0)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        servos.P0.run(50)
    } else {
        servos.P0.stop()
    }
    if (input.buttonIsPressed(Button.B)) {
        servos.P1.run(-100)
    } else {
        servos.P1.stop()
    }
})
