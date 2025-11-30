import React, { useCallback } from 'react'

function Use_Memo() {
  return (
    <div>Use_Memo</div>
  )
}

export default Use_Memo
//* Memoization => IT is A CODE OTIMISED TECHNIQUE IT PREVENT UNECCESSARY RENDERING OF A COMPONENT BY STORING PREVIOUS VALUE
//* DIFFERENT TYPE OF MEMOIZATION METHODS
//* React.memo > IT IS COMPONENT
//* Use_Memo > IT IS HOOK 
//* useCallback > iT IS hOOK

//! 1. React.memo
//? This is a higher-order component (HOC), not a hook. 
//? You wrap a functional component with React.memo(...)
//? What it does: React will skip re-rendering this component if its props haven’t changed (via a shallow comparison). 
//? GeeksforGeeks
//? Use case: Use it for child components that are “pure” (i.e., given the same props, they always render the same). This avoids re-render when the parent re-renders.

//! 2. useCallback
//? It remember the return value of expnesive function 
//? Another hook: useCallback(fn, [dependencies]). 
//? What it does: It memoizes a function definition, returning the same function reference unless dependencies change. 
//? Why this matters: In JavaScript, functions are objects. On every render, if you define a function inline, it's a new object/reference. Passing that to a child component (even if the logic is same) looks like a new prop, which can cause re-render. useCallback helps avoid that. 
//? Use case: Especially useful when:
//? You pass callback functions (like event handlers) to child components.
//? These child components are memoized (using React.memo) — stable function references mean the child won’t re-render if only the function reference was changing

//! 3 useMemo
//* This is a hook: useMemo(() => value, [dependencies]). 
//* What it does: It memoizes a computed value. The function you pass (() => value) only re-runs when one of the dependencies changes. 
//* Use case:When you have expensive calculations (like filtering, heavy loops, or complex computations), and you don’t want to recalculate on every render. 
//* When you derive a value (like an array or object) and you want to pass it to a child component so that child doesn’t re-render unnecessarily.