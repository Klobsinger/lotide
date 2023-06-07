# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @klobber/lotide`

**Require it:**

`const _ = require('@klobber/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(list)`: Retrieves the head element of a list.
* `tail(list)`: Retrieves the tail elements of a list.
* `middle(list)`: Retrieves the middle elements of a list.
* `without(array, valuesToRemove)`: Returns a new array with the specified values removed.
* `takeUntil(array, callback)`: Returns a new array with elements taken from the original array until the callback function returns a truthy value.
* `letterPositions(sentence)`: Returns an object with the positions of each letter in the given sentence.
* `flatten(array)`: Flattens a nested array into a single-level array.
* `findKeyByValue(object, value)`: Returns the key corresponding to the given value in the object.
* `findKey(object, callback)`: Returns the first key in the object that satisfies the callback condition.
* `eqObjects(object1, object2)`: Compares two objects for deep equality.
* `eqArrays(array1, array2)`: Compares two arrays for equality.
* `countOnly(allItems, itemsToCount)`: Counts the occurrences of specific items in an array.
* `countLetters(sentence)`: Counts the occurrences of each letter in the given sentence.
* `assertObjectsEqual(actual, expected)`: Asserts that two objects are equal.
* `map(array, callback)`: Applies a callback function to each element in the array and returns a new array with the results.
* `assertEqual(actual, expected)`: Asserts that two values are equal.
* `assertArraysEqual(actual, expected)`: Asserts that two arrays are equal.
