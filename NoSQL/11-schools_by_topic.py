#!/usr/bin/env python3
"""Module for queryng schools by topic"""


def schools_by_topic(mongo_collection, topic):
    """Return list of schools having a specific topic"""

    return mongo_collection.find({"topics": topic})
