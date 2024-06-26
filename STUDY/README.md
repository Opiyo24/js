BuyEPUB/PDF
The Modern JavaScript Tutorial

How it's done now. From the basics to advanced topics with simple, but detailed explanations.
Last updated on March 11, 2024
BuyEPUB/PDF
Share:
22431 ★github
Discord Chat
Table of contents

Main course contains 2 parts which cover JavaScript as a programming language and working with a browser. There are also additional series of thematic articles.
Part 1The JavaScript language
Part 2Browser: Document, Events, Interfaces
Part 3Additional articles
The JavaScript language

Here we learn JavaScript, starting from scratch and go on to advanced concepts like OOP.

We concentrate on the language itself here, with the minimum of environment-specific notes.
An introduction

    An Introduction to JavaScript
    Manuals and specifications
    Code editors
    Developer console

JavaScript Fundamentals

    Hello, world!
    Code structure
    The modern mode, "use strict"
    Variables
    Data types
    Interaction: alert, prompt, confirm
    Type Conversions
    Basic operators, maths
    Comparisons
    Conditional branching: if, '?'
    Logical operators
    Nullish coalescing operator '??'
    Loops: while and for
    The "switch" statement
    Functions
    Function expressions
    Arrow functions, the basics
    JavaScript specials

Code quality

    Debugging in the browser
    Coding Style
    Comments
    Ninja code
    Automated testing with Mocha
    Polyfills and transpilers

Objects: the basics

    Objects
    Object references and copying
    Garbage collection
    Object methods, "this"
    Constructor, operator "new"
    Optional chaining '?.'
    Symbol type
    Object to primitive conversion

Data types

    Methods of primitives
    Numbers
    Strings
    Arrays
    Array methods
    Iterables
    Map and Set
    WeakMap and WeakSet
    Object.keys, values, entries
    Destructuring assignment
    Date and time
    JSON methods, toJSON

Advanced working with functions

    Recursion and stack
    Rest parameters and spread syntax
    Variable scope, closure
    The old "var"
    Global object
    Function object, NFE
    The "new Function" syntax
    Scheduling: setTimeout and setInterval
    Decorators and forwarding, call/apply
    Function binding
    Arrow functions revisited

Object properties configuration

    Property flags and descriptors
    Property getters and setters

Prototypes, inheritance

    Prototypal inheritance
    F.prototype
    Native prototypes
    Prototype methods, objects without __proto__

Classes

    Class basic syntax
    Class inheritance
    Static properties and methods
    Private and protected properties and methods
    Extending built-in classes
    Class checking: "instanceof"
    Mixins

Error handling

    Error handling, "try...catch"
    Custom errors, extending Error

Promises, async/await

    Introduction: callbacks
    Promise
    Promises chaining
    Error handling with promises
    Promise API
    Promisification
    Microtasks
    Async/await

Generators, advanced iteration

    Generators
    Async iteration and generators

Modules

    Modules, introduction
    Export and Import
    Dynamic imports

Miscellaneous

    Proxy and Reflect
    Eval: run a code string
    Currying
    Reference Type
    BigInt
    Unicode, String internals
    WeakRef and FinalizationRegistry

Browser: Document, Events, Interfaces

Learning how to manage the browser page: add elements, manipulate their size and position, dynamically create interfaces and interact with the visitor.
Document

    Browser environment, specs
    DOM tree
    Walking the DOM
    Searching: getElement*, querySelector*
    Node properties: type, tag and contents
    Attributes and properties
    Modifying the document
    Styles and classes
    Element size and scrolling
    Window sizes and scrolling
    Coordinates

Introduction to Events

    Introduction to browser events
    Bubbling and capturing
    Event delegation
    Browser default actions
    Dispatching custom events

UI Events

    Mouse events
    Moving the mouse: mouseover/out, mouseenter/leave
    Drag'n'Drop with mouse events
    Pointer events
    Keyboard: keydown and keyup
    Scrolling

Forms, controls

    Form properties and methods
    Focusing: focus/blur
    Events: change, input, cut, copy, paste
    Forms: event and method submit

Document and resource loading

    Page: DOMContentLoaded, load, beforeunload, unload
    Scripts: async, defer
    Resource loading: onload and onerror

Miscellaneous

    Mutation observer
    Selection and Range
    Event loop: microtasks and macrotasks

Additional articles
List of extra topics that assume you've covered the first two parts of tutorial. There is no clear hierarchy here, you can read articles in the order you want.
Frames and windows

    Popups and window methods
    Cross-window communication
    The clickjacking attack

Binary data, files

    ArrayBuffer, binary arrays
    TextDecoder and TextEncoder
    Blob
    File and FileReader

Network requests

    Fetch
    FormData
    Fetch: Download progress
    Fetch: Abort
    Fetch: Cross-Origin Requests
    Fetch API
    URL objects
    XMLHttpRequest
    Resumable file upload
    Long polling
    WebSocket
    Server Sent Events

Storing data in the browser

    Cookies, document.cookie
    LocalStorage, sessionStorage
    IndexedDB

Animation

    Bezier curve
    CSS-animations
    JavaScript animations

Web components

    From the orbital height
    Custom elements
    Shadow DOM
    Template element
    Shadow DOM slots, composition
    Shadow DOM styling
    Shadow DOM and events

Regular expressions

    Patterns and flags
    Character classes
    Unicode: flag "u" and class \p{...}
    Anchors: string start ^ and end $
    Multiline mode of anchors ^ $, flag "m"
    Word boundary: \b
    Escaping, special characters
    Sets and ranges [...]
    Quantifiers +, *, ? and {n}
    Greedy and lazy quantifiers
    Capturing groups
    Backreferences in pattern: \N and \k<name>
    Alternation (OR) |
    Lookahead and lookbehind
    Catastrophic backtracking
    Sticky flag "y", searching at position
    Methods of RegExp and String

Comments
read this before commenting…

    If you have suggestions what to improve - please submit a GitHub issue or a pull request instead of commenting.
    If you can't understand something in the article – please elaborate.
    To insert few words of code, use the <code> tag, for several lines – wrap them in <pre> tag, for more than 10 lines – use a sandbox (plnkr, jsbin, codepen…)

    © 2007—2024  Ilya Kantor
    about the project
    contact us
    terms of usage
    privacy policy