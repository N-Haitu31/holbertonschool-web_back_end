#!usr/bin/env python3
"""Module for insertinf a new dcument in a MongoDB collection"""


def insert_scholl(mongo_collection, **kwargs):
    """Insert a new document in collection & return its _id"""

    result = mongo_collection.insert_one(kwargs)
    return result.inserted_id
