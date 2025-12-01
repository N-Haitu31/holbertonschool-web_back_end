#!/usr/bin/env python3
"""Pagination helper module"""

from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """Calculate start & end indices for pagination slice"""

    start_index = (page - 1) * page_size
    end_index = start_index + page_size

    return start_index, end_index
