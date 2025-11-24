#!/usr/bin/env python3
"""Module for creating a tuple from a string & the square of a number"""

from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Create a tuple containing a string and the square of a numeric value"""

    return (k, float(v ** 2))
