#!/usr/bin/env python3
"""Module for insertinf a new dcument in a MongoDB collection"""


def insert_school(mongo_collection, **kwargs):
    """Insert a new document in collection & return its _id"""

    doc_id = mongo_collection.insert_one(kwargs).inserted_id
    return doc_id
