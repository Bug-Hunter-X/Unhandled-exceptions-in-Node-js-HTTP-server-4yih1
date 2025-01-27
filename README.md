# Unhandled Exceptions in Node.js HTTP Server

This repository demonstrates a common error in Node.js applications: the lack of proper error handling in HTTP servers.  Unhandled exceptions can lead to server crashes without informative error messages, making debugging difficult.

## Bug

The `bug.js` file shows an HTTP server that fails to handle exceptions properly.  If an error occurs during request processing, the server will crash without providing any details.

## Solution

The `bugSolution.js` file demonstrates the corrected version with robust error handling using `try...catch` blocks and proper logging to facilitate debugging.

## How to reproduce the bug

1. Clone the repository.
2. Run `node bug.js`.
3. The server will start, but any error (e.g., accessing a non-existent file) will cause it to crash.