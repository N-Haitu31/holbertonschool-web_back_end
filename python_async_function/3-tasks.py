#!/usr/bin/env python3
"""Module for creating an asyncio Task from wait_random coroutine"""

import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """Create & return an asyncio.Task for the wait_random coroutine"""

    # Create a Task for the wait_random coroutine, schedule it immediatly
    return asyncio.create_task(wait_random(max_delay))
