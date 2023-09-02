# JTest

> Jest tutorial - some test examples are written with Jest

This repo is based on [Jest 实践指南](https://github.com/haixiangyan/jest-tutorial)

## Test Driven Development ( TDD ) 
Test Falls -> Test Passes -> Refactor -> Test Falls ...

> TDD mode is widely used in utility functions
> 
> Test cases are always the use cases. You can also look at the test cases ( use cases ) as documentation for the function ~ 
  -  pure function scenarios ( Easy to think of input and output )
  -  BUG fixing scenarios ( when encountering a bug, write a test case to reproduce the bug, then fix the bug )
  -  UI interaction scenarios ( use test to simulate user interaction, then implement the main logic )

## Behavior Driven Development (BDD)

First, develop the main logic, then write the test cases to test the important part.

## Snapshot Testing

> Snapshot testing is not for testing the logic, it is for testing the UI

Avoid:

- should not test big components

Snapshot Testing:

- Generate the dom structure of the component, then compare the dom structure with the different render result.

Jest's snapshots aren't limited to recording the DOM structure; they can also capture any content that can be serialized, including plain text, JSON, and XML.
