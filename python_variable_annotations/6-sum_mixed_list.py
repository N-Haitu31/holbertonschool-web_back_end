#!/usr/bin/env python3
"""Module for summing a list containing integers ans floats"""

from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """Compute the sum of all integers and float numbers
    in the input list"""

    return float(sum(mxd_lst))
