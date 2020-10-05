# MIUN 'Interaktiva Webbapplikationer' JavaScript Labb 0

Please note; node.js is a pre-requisite for using this repo. (https://nodejs.org/en/download/)[https://nodejs.org/en/download/]

You can check that nodejs is installed by typing `node -v` in your terminal. Node.js v12.x and above is recommended. 

## Instructions

This laboration is based on you completing several mini-programming-problems (or katas). It comes with a test-suite, which will help you in development. Recommended documentation are (the MDN JavaScript docs)[https://developer.mozilla.org/sv-SE/docs/Web/JavaScript]. 

You work on the assignments by implementing functions in the src/labb.js file. You figure out what each function should do by reading the test-cases in test/labb.test.js. 


Once all tests are passing, you are ready to hand in the assignment. You do this by pushing your repo with implemented solutions to github, and then submitting the link via Moodle. 

Please note: Passing the test does not necessarily mean you pass the assignment! Your implementation will also be considered. Copying solutions is not allowed, and you need to ba able to motivate your implementation if asked to do so.

## Getting started

1. Clone this repo and change into its directory `git clone https://github.com/larswww/miun-js-labb-1 && cd miun-js-labb-1`
2. Install dependencies `npm install`


## Running tests

1. To run the test suite `npm run test`

Tip! By installing jest as a global npm package, you can run the entire testsuite continously and watch for changes to your code; `npm install jest --global`. Now by running `jest --watchAll` the suite will be re-run each time you modify your code.

To re-run an individual test continously use `jest -t nameMatchingDescribe`. where 'nameMatchingDescribe' somewhat matches to beginning of the description in the test's describe()-block.
