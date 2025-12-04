#!/usr/bin/env python3
"""Module for updating topics of a school doc"""


def update_topics(mongo_collection, name, topics):
    """Change all topics of school doc with the given name"""

    mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}}
    )
    