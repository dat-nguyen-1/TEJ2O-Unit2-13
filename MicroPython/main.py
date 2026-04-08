"""
Created by: Dat Nguyen
Created on: Apr 2026
This module will countdown neopixels.
"""

from microbit import *
from neopixel import NeoPixel

import time

# define color constants
BLACK = (0, 0, 0)
REDD = (255, 0, 0)

# initialize neopixel strip
NEOPIXEL_STRIP = NeoPixel(pin16, 4)
NEOPIXEL_STRIP.clear()
NEOPIXEL_STRIP.show()

# initialize display
display.clear()
display.show(Image.HAPPY)

# main loop
while True:
    if button_a.was_pressed():
        neopixel_counter = 0

        # turn up all neopixels red
        while neopixel_counter <= 3:
            NEOPIXEL_STRIP[neopixel_counter] = RED

        NEOPIXEL_STRIP.show()

        # countdown neopixels
        while neopixel_counter >= 0:
            NEOPIXEL_STRIP[neopixel_counter] = BLACK
            NEOPIXEL_STRIP.show()

            # wait 1 s
            time.sleep(1)
