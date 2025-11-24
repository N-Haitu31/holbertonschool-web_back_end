#!usr/bin/env python3
"""Module providing a function to compute the mathematical floor of a float"""

import math


def floor(n: float) -> int:
    """Return the floor of the input floating-point number"""

    # Use math.floor to compute the integer part (floor) of the float
    return math.floor(n)
