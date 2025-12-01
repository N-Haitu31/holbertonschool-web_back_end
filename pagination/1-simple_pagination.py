#!/usr/bin/env python3
"""Simple pagination of Popular_Baby_Names.csv"""

import csv
from typing import List, Tuple, Optional


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """Compute start & end index for pagination"""
    start = (page - 1) * page_size
    end = start + page_size

    return start, end


class Server:
    """Server class to paginate a database of popular baby names"""
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self) -> None:
        """Initialize the server with no dataset loaded yet"""
        self.__dataset: Optional[List[List]] | None = None

    def dataset(self) -> List[List]:
        """cached dataset"""
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            # Skip header row
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """Return the appropriate page of the dataset"""

        # 1. Validate arguments
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        # 2. Get full dataset
        dataset = self.dataset()

        # 3. Compute start and end indexes
        start, end = index_range(page, page_size)

        # 4. Return slice (empty list if out of range)
        return dataset[start:end]
