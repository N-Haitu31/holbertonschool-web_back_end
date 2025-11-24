# Python - Async
This project introduces the basics of asynchronous programming in Python using the async and await syntax, with a special focus on the asyncio library. Asynchronous programming enables Python applications to handle multiple I/O-bound tasks concurrently and efficiently, especially useful for network requests, file operations, and more.

# What is Asynchronous Programming?
Synchronous programming runs operations one after the other, making the whole program wait during long or blocking operations (like waiting for a web response).

Asynchronous programming allows some operations to run "in the background," so the program can continue without waiting. This is great for tasks involving lots of waiting—such as downloading files or making API requests.

# Core Concepts
Event Loop: The “event loop” is the main controller of asynchronous execution. It schedules and runs tasks, switching between them as needed.

Coroutines: Special functions defined with async def; they can pause and let other coroutines run, then resume later.

async / await:

async marks a function as asynchronous.

await is used in an async function to “pause” and wait for another async function to finish.

# Example: Basic Async Program
'''
python
import asyncio

async def say_after(delay, msg):
    await asyncio.sleep(delay)
    print(msg)

async def main():
    print("Started")
    await say_after(1, "Hello")
    await say_after(2, "World")
    print("Finished")

asyncio.run(main())
'''

In this example, say_after waits and prints each message after a delay. Other tasks could run during the waits.

# Example: Concurrent Tasks
You can run multiple tasks at the same time:
'''
python
async def main():
    task1 = asyncio.create_task(say_after(1, "Hello"))
    task2 = asyncio.create_task(say_after(2, "World"))
    print("Started")
    await task1
    await task2
    print("Finished")

asyncio.run(main())
'''

Here, both messages are scheduled together – making the program finish faster.

# When to Use Async Programming in Python
## Best for:

Handling many network requests

Reading/writing large files

Working with databases

Any I/O operations where waiting is common

## Not recommended for:

CPU-intensive tasks (image processing, heavy calculations, machine learning).
For these, consider using threads or processes instead.

## Key Takeaways
Async programming lets Python run many tasks efficiently—especially those that would otherwise block execution, like network I/O.

It uses a single thread with an event loop, which keeps your app fast and reactive.

Use async and await to write clear, non-blocking code.

## References & Learning Resources
Official Python asyncio documentation

Real Python: Async IO in Python

Asyncio Tutorial (YouTube)