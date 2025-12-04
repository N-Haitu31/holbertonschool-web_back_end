#!usr/bin/env python3
"""Module for listing all documents in a MonfoDB collection"""

from typing import List


def list_all(mongo_collection):
    """
    Return an empty list if no document in the collection
    """
    resultat = mongo_collection.find()
    return resultat
