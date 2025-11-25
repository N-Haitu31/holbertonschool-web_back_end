#!/usr/bin/env python3
"""Module for running multiple asyncio Task with random wait"""

import asyncio
from typing import List
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """Spawn task_wait random n times with specified max_delay &
    return sorte list o f delays"""

    # Create n Tasks using task_wait_random
    task = [task_wait_random(max_delay) for _ in range(n)]
    delays = []

    # As_completed yields tasks as soon as they complete (fastest first)
    for done in asyncio.as_completed(task):
        delay = await done
        delays.append(delay)
    return delays
