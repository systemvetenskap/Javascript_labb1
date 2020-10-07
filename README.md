# MIUN 'Interaktiva Webbapplikationer' JavaScript Labb 0

Please note; node.js is a pre-requisite for using this repo. [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

You can check that nodejs is installed by typing `node -v` in your terminal. Node.js v12.x and above is recommended. 

## Instructions

This laboration is based on you completing several mini-programming-problems (or katas). It comes with a test-suite, which will help you in development. I recommended referring to [the MDN JavaScript docs](https://developer.mozilla.org/sv-SE/docs/Web/JavaScript) when implementing your solutions. 

You work on the assignments by implementing functions in the src/labb.js file. You figure out what each function should do by reading the test-cases in test/labb.test.js.

at the top of test/labb.test.js all the functions you should implement, are imported into the test-suite, using require. 
```javascript
const { sum, multiply, isBelowZero, round, addingUp, findMinMax, afterXmasEve2020, sortByStringLength,
     charCounter, numbersOnly, sortNumbers, personFactory, doublePrice, and, removeLeadingTrailing, getKeysAndValues} = require('../src/labb')
```
This means that, your src/labb.js file should export these functions. 

In Node.js, you export functions using the following syntax;
```javascript
const aVariable = function() {}
module.exports.someName = aVariable
```
The test code describes what you should do;

```javascript
 describe('sum returns sum of two numbers', () => {
        test('adds 1 + 2 to equal 3', () => {
            expect(sum(1, 2)).toBe(3)
          })
    
        test('adds 7 + 3 to equal 10', () => {
            expect(sum(7, 3)).toBe(10)
        })  
    })
```
The describe block describes what this function should do. In each describe block, test cases are defined. Here the first test case expects the function sum() to return the number 3 when called with parameters 1 and 2, i.e. sum(1,3). The second test case simply changes the parameters, and therefore expects a different result.

You could pass these tests with the following code
```javascript
function sum(a, b) {
    if (a === 1 && b === 2) return 3
    if (a === 7 && b === 3) return 10
}
```
Obviously, whilst this will pass test cases, this is not correct, and you would not pass the assignment with this implementation. The test cases are there to help you, not to prove that your program is correct. 

Once all tests are passing, you are ready to hand in the assignment. You do this by pushing your repo with implemented solutions to github, and then submitting the link via Moodle. 

Please note: Passing the test does not necessarily mean you pass the assignment! Your implementation will also be considered. Copying solutions is not allowed, and you need to ba able to motivate your implementation if asked to do so.

## Getting started

1. Clone this repo and change into its directory `git clone https://github.com/systemvetenskap/Javascript_labb1 && cd miun-js-labb-1`
2. Install dependencies `npm install`


## Running tests
This repo comes with a test-suite, and has jest as a dependency (you installed jest when you typed npm install). Jest is a [testing framework by facebook](https://jestjs.io/). 


1. To run the test suite `npm run test` in the terminal. It will print to the test results in your terminal. Work on your program until all tests pass. 

Tip! By installing jest as a global npm package, you can run the entire testsuite continously and watch for changes to your code; `npm install jest --global`. Now by running `jest --watchAll` the suite will be re-run each time you modify your code.

To re-run an individual test continously use `jest -t nameMatchingDescribe`. where 'nameMatchingDescribe' somewhat matches to beginning of the description in the test's describe()-block.

## Using the debugger
You can use the [jest runner vs code plugin](https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner) to run individual test-cases with the debugger. 
