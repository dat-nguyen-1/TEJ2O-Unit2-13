/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Dat Nguyen
 * Created on: Apr 2026
 * This program will countdown Neopixels.
*/

// define color constants
const BLACK: NeoPixelColors = NeoPixelColors.Black
const RED: NeoPixelColors = NeoPixelColors.Red

// initialize neopixel instance
const NEOPIXEL_STRIP = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
NEOPIXEL_STRIP.clear()
NEOPIXEL_STRIP.show()

// initialize display
basic.showIcon(IconNames.Yes)

input.onButtonPressed(Button.A, function() {
    let neopixelCounter: number = 0

    // light up all neopixels
    while (neopixelCounter <= 3) {
        NEOPIXEL_STRIP.setPixelColor(neopixelCounter, RED)
        neopixelCounter += 1
    }

    NEOPIXEL_STRIP.show()

    // neopixel countdown
    while (neopixelCounter >= 0) {
        NEOPIXEL_STRIP.setPixelColor(neopixelCounter, BLACK)
        NEOPIXEL_STRIP.show()
        neopixelCounter -= 1

        // wait 1 s
        basic.pause(1000)
    }
})
