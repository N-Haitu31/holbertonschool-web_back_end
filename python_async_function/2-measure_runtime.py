#!/usr/bin/env python3
"""Module for mesuring the average runtime of wait_n"""

import time
wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """Measure the average time taken by wait_n(n, max_delay)"""

    # Record the start time
    start: float = time.perf_counter()

    # Run the async wait_n routine and wait until it's done
    delays = __import__('asyncio').run(wait_n(n, max_delay))

    # Record the end time
    end: float = time.perf_counter()

    # Calculate the total elapsed time
    total_time: float = end - start

    # Compute and return the average time per coroutine
    return total_time / n
