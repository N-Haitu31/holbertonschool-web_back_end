#!/usr/bin/env python3
"""Module for running multiple asynchronous random wait coroutines"""

import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """Spawn wait_random n times with specified max_delay
    and return sorted list of delays"""

    # Create n tasks for wait_random(max_delay)
    tasks = [asyncio.create_task(wait_random(max_delay)) for _ in range(n)]
    delays = []

    # Use asyncio.as_completed to get results as soon as each task is done
    for done in asyncio.as_completed(tasks):
        delay = await done
        delays.append(delay)

    # At this point, delays are already in ascending order of completion
    return delays
