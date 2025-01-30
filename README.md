# TypeScript Type Error: Passing Array to String Function

This repository demonstrates a common TypeScript error: passing an array to a function that expects a string. The `greeter` function expects a string argument, but we are passing an array. TypeScript's type system will correctly catch this error.

The solution shows how to correctly handle this situation, by either iterating over the array and calling the function for each element or modifying the function to accept an array.