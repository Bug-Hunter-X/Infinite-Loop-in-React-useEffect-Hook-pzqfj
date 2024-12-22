# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React applications: an infinite loop caused by incorrectly updating state within a `useEffect` hook's dependency array.

## The Bug
The `bug.js` file contains a component that attempts to increment a state variable (`count`) within the `useEffect` hook's callback function. Because the state update modifies the `count` variable, which is also a dependency, the `useEffect` hook will run again infinitely.

## The Solution
The `bugSolution.js` file shows how to fix the problem by removing the state variable from the dependency array or ensuring the state update only depends on external factors.