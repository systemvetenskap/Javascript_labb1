// modifiera sum() tills testet blir godkänt!
function sum(a, b) {
  console.log("funct sum");
}

function myOwnMultiplyFunction() {}

// denna måste exporteras längst ned i denna fil! annars kan labb.test.js inte importera den.
function isBelowZero() {}

// fortsätt skapa alla lösningar som beskrivs i labb.test.js och exportera dem!

//etc...

// https://eloquentjavascript.net/10_modules.html#h_N33QHgUxbG how require and modules work in JavaScript
module.exports.sum = sum;
module.exports.multiply = myOwnMultiplyFunction;
module.exports.isBelowZero = undefined;
module.exports.round = undefined;
module.exports.addingUp = undefined;
module.exports.findMinMax = undefined;
module.exports.afterXmasEve2020 = undefined;
module.exports.sortByStringLength = undefined;
module.exports.charCounter = undefined;
module.exports.numbersOnly = undefined;
module.exports.sortNumbers = undefined;
module.exports.personFactory = undefined;
module.exports.doublePrice = undefined;
module.exports.and = undefined;
module.exports.removeLeadingTrailing = undefined;
module.exports.getKeysAndValues = undefined;
