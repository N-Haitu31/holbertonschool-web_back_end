# NoSQL

This repository contains my exercises and notes while learning the fundamentals of NoSQL databases and how they differ from traditional relational databases (SQL/RDBMS).

## Project Goals

- Understand what NoSQL is and why it exists.
- Explore the main NoSQL data models (key-value, document, wide-column, graph).
- Learn how NoSQL databases handle scalability, performance, and high availability.
- Practice basic operations (create, read, update, delete) with one or more NoSQL databases.

## What Is NoSQL?

NoSQL (Not Only SQL) refers to a family of non-relational databases designed to handle large volumes of data, high read/write throughput, and flexible or evolving data structures.  
Instead of strict tables and schemas, NoSQL databases use more flexible models such as documents, key-value pairs, columns, or graphs.

Typical use cases include:

- User profiles and session data
- Logs, chat messages, and event streams
- Time series data (IoT, metrics)
- Media and large binary objects (images, videos)

## Topics Covered in This Repository

This project focuses on the following concepts:

- **NoSQL vs SQL**
  - Differences in data modeling
  - When to choose NoSQL over a relational database
- **Data models**
  - Key-value stores
  - Document databases
  - Wide-column stores
  - Graph databases
- **Scalability and availability**
  - Horizontal scaling with clusters
  - Replication and sharding concepts
- **Flexible data modeling**
  - Schema-less or schema-flexible design
  - Storing semi-structured and unstructured data

## Repository Structure

The structure may evolve, but the repository is expected to contain:

- `docs/` – Notes and explanations about NoSQL concepts.
- `examples/` – Code samples or configuration files for different NoSQL databases.
- `exercises/` – Small tasks or mini-projects to practice queries and data modeling.

## Requirements and Tools

Depending on the exercises, this project may use one or more of the following:

- A NoSQL database (for example: MongoDB, Redis, Cassandra, or another engine)
- A programming language (for example: Python, JavaScript/TypeScript, etc.)
- Containerization or orchestration tools (optional), such as Docker

Check each subfolder's README or documentation for specific setup instructions.

## Learning Objectives

By the end of this project, the goal is to:

- Be comfortable explaining what NoSQL is and when to use it.
- Understand the main types of NoSQL databases and their typical use cases.
- Be able to design simple NoSQL data models for real-world scenarios.
- Gain some hands-on experience running and querying a NoSQL database.