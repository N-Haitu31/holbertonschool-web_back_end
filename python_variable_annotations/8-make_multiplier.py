#!/usr/bin/env python3
"""Module for creting a multiplier function"""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Create a multiplier function that multiplies
    a float by a given number"""

    return lambda x: x * multiplier
