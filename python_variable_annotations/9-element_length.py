#!usr/bin/env python3
"""Module for computing the length of elements in an iterable of sequences"""

from typing import Iterable, Sequence, List,Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Return a list of tuples with each elemnt & its length"""

    return [(i, len(i)) for i in lst]
