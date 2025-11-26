#!/usr/bin/env python3
"""Module for an asynchronous generator yielding random number"""

import asyncio
import random
from typing import AsyncGenerator


async def async_generator() -> AsyncGenerator[float, None]:
    """Asynchronous generator that yields 10 random values between 0 & 10,
    waiting 1 sec before yielding each value"""

    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
