#!/usr/bin/env python3
"""Module for an asynchronous generator yielding random number"""

import asyncio
import random


async def async_generator():
    """Asynchronous generator that yields 10 random values between 0 & 10,
    waiting 1 sec before yielding each value"""

    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
