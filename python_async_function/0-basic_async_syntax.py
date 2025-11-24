#!/usr/bin/env python3
"""Module containing asynchronous coroutine to wait for a random delay"""

import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """Wait asynchronously for a random delay between 0 and max_delay seconds,
    then return the delay."""

    # Generate a random float value between 0 and max_delay (inclusive)
    delay: float = random.uniform(0, max_delay)

    # Asynchronously wait for the random delay
    await asyncio.sleep(delay)

    # Return the value of the delay
    return delay
