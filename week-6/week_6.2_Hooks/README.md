Common hooks in React:
useEffect, useCallback, useMemo,custom hooks Prop drilling

Jargons to know:
1. Side effects
2. Hooks

1. In React, the concept of side-effects means any operations that reach outside 
functional scope of React Component
These oper(s) can affect other components, interact with browser or perform async data fetching 
ex:
setTimeout,fetch,setInterval

2. Hooks:
Hooks were introduced in React 16.8

HOOKS:
1. useState:
-It describes the state of your app
- Whenever state updates, it triggers a re-render which
finally results in DOM update

2. useEffect:
-Its a feature in React.
-It allows you to perform side effects in function components
like data-fetching, subscriptions,that should not be
done during rendering
useEffect = componentDidMount + componentDidUpdate + componentWillUnmount
if dependency array id empty, it means do it only once
Dependency array: When the code should run

3. useMemo:
It remembers some output given an input and not computing it again(analogy:cache)

##useMemo: Use when you need to memoize a value to optimize performance, especially for expensive calculations or maintaining referential equality.
##useEffect: Use for side effects, such as data fetching, subscriptions, DOM updates, and running code on mount/unmount.


| Aspect                   | `useMemo`                                                 | `useEffect` |
|--------------------------|-----------                                                |-------------|
| **Purpose**              | Memoizes (caches) a **value** (e.g., calculation result). | Runs **side effects** (e.g., API calls, DOM updates). |
| **When it runs**         | During **rendering** if dependencies change.               **After** the render is committed to the DOM. |
| **Return Value**         | Returns a **value** that you can use immediately.         | Does **not return a value**; used for executing effects. |
| **Typical Use Cases**    | - Expensive computations<br>- Optimizing derived data     | - Fetching data<br>- Subscribing/unsubscribing to events<br>- Manually updating the DOM |
| **Example**              | Caching a computed sum                                    | Fetching todos from an API |


4. useCallback:
It is used to memoize functions in cases involving child components
that rely reference equality to prevent unnecessary renders.
 What is useCallback?
useCallback(fn, deps) returns a memoized version of the function fn, which only changes if the dependencies change.

5. Custom hooks:
Just like useEffect, useState, you can write your own hooks
Only condition is: it should start with 'use'


🧠 In short:

react			react-dom
Core React logic	Renders to the web DOM
Component definitions	Mounting to HTML elements
Hooks (useState, etc)	createRoot, render
Platform-agnostic	Web-specific

Bonus: React Native?
In React Native, you still use react, but instead of react-dom, you use react-native, which renders to mobile platforms instead of the browser.

