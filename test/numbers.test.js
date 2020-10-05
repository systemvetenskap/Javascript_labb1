const { sum, multiply, isBelowZero, round, addingUp, findMinMax, afterXmasEve2020, sortByStringLength,
     charCounter, numbersOnly, sortNumbers, personFactory, doublePrice, and, removeLeadingTrailing, getKeysAndValues} = require('../src/numbers')


describe('Numbers', () => {

    describe('sum returns sum of two numbers', () => {
        test('adds 1 + 2 to equal 3', () => {
            expect(sum(1, 2)).toBe(3)
          })
    
        test('adds 7 + 3 to equal 10', () => {
            expect(sum(7, 3)).toBe(10)
        })  
    })


    describe('multiply returns multiple of two numbers', () => {
        test('multiplies 3 * 3 to equal 9', () => {
            expect(multiply(3, 3)).toBe(9)
        })

        test('multiplies 100 * 100 to equal 10000', () => {
            expect(multiply(100, 100)).toBe(10000)
        })
    })

    describe('isBelowZero', () => {
        test('returns true for -1', () => {
            expect(isBelowZero(-1)).toBe(true)
        })

        test('returns false for 1', () => {
            expect(isBelowZero(1)).toBe(false)
        })

    })

    describe('round returns the closest whole number', () => {
        test('returns 21 for 21.1', () => {
            expect(round(21.1)).toBe(21)
        })

        test('returns 18 for 17.6', () => {
            expect(round(17.6)).toBe(18)
        })

    })


    describe('addingUp adds all the numbers from 1 to given argument', () => {
        
        test('4 returns 10 because 1+2+3+4 = 10', () => {
            expect(addingUp(4)).toBe(10)
        })

        test('7 returns 28', () => {
            expect(addingUp(7)).toBe(28)
        })
    })

    describe('findMinMax takes an array of numbers and returns an object with min max keys containging min max values', () => {

        test('[2,3,1] returns {min: 1, max: 2}', () => {
            expect(findMinMax([2, 3, 1])).toMatchObject({min: 1, max: 2})
        })

        test('[-1, 100, 50, 27] returns {min: -1, max: 100}', () => {
            expect(findMinMax([-1, 100, 50, 27])).toMatchObject({min: -1, max: 100})

        })

    })


    describe('afterXmasEve2020 takes a date as param and returns a boolean indicating if argument is after 2020-12-24', () => {

        test('2021-01-01 returns true', () => {
            expect(afterXmasEve2020('2021-01-01')).toBe(true)
        })

        test('1978-01-01 returns false', () => {
            expect(afterXmasEve2020('1978-01-01')).toBe(false)
        })

        test('2020-12-23 returns false', () => {
            expect(afterXmasEve2020('2020-12-23')).toBe(false)
        })

    })

    describe('sortByStringLength takes an array of strings and returns it sorted based on string length', () => {

        test('["longest", "word", "hej"] === ["hej", "word", "longest"]', () => {
            expect(sortByStringLength(["longest", "word", "hej"])[0]).toBe('hej')
            expect(sortByStringLength(["longest", "word", "hej"])[1]).toBe('word')
            expect(sortByStringLength(["longest", "word", "hej"])[2]).toBe('longest')
        })

        test('["januari", "februari", "mars", "april"] === ["mars", "april", "januari", "februari"]', () => {


        })
    })

    describe('charCounter takes a letter as first argument, and counts the number of times it occurs in the second argument, returning the number', () => {
        
        test('charCounter("x", "sex laxar i en lax ask") returns 3', () => {
            expect(charCounter("x", "sex laxar i en lax ask")).toBe(3)
        })

        test('charCounter("t", "It Takes Two To Tango") returns 5', () => {
            expect(charCounter("t", "It Takes Two To Tango")).toBe(5)
        })

    })


    describe('numbersOnly filters an array and returns a copy containing only numbers', () => {
        test('["hej", 7, 8, false, 3] === [7, 8, 3]', () => {
            const arg = ["hej", 7, 8, false, 3]
            expect(numbersOnly(arg)).toEqual(expect.toStrictEqual([7, 8, 3]))
            expect(numbersOnly(arg)).not.arrayContaining(["hej", false])
            expect(numbersOnly(arg)).arrayContaining([7, 8, 3])

        })

        test('[9, NaN, 2, null, 0, "string", undefined, 4] === [7, 8, 3]', () => {
            expect().toEqual(expect.toStrictEqual([7, 8, 3]))
        })

        test('[1, -1, 0, 3] === [1, -1, 0, 3]', () => {
            expect().toEqual(expect.toStrictEqual([1, -1, 0, 3]))
        })
    })


    describe('sortNumbers takes an array of numbers and a sort order argument. If sortOrder is 1 it sorts ascending, if -1 descending', () => {
        test('sorts ascending', () => {
            expect(sortNumbers([80, 29, 4, -95, -24, 85], 1)).toEqual(expect.toStrictEqual([-95, -24, 4, 29, 80, 85]))
        })

        test('sorts descending', () => {
            expect(sortNumbers([1, 2, 10, 50, 5]), -1).toEqual(expect.toStrictEqual([50, 10, 5, 2, 1]))
        })

    })


    describe('noDuplicates takes an array and returns a copy with no duplicate values', () => {



    })

    describe('personFactory returns a new person class with properties firstname, lastname, fullname and initials', () => {
        const person = new personFactory('Student', 'Studentson')

        test('firstname', () => { 
            expect(person.firstname).toBe('Student')
        })

        test('lastname', () => { 
            expect(person.lastname).toBe('Studentson')
        })

        const otherPerson = new personFactory('birger', 'odjurson')

        test('firstname / lastname is always capitalized', () => { 
            expect(otherPerson.firstname).toBe('Birger')
        })

        test('initials returns person initials', () => {
            expect(person.initials).toBe('S.S')
        })

        test('initials are capitalized', () => {
            expect(otherPerson.initials).toBe('B.O')
        })
    })

    describe('doublePrice takes an array of product objects and returns the same array with price for each object doubled', () => {
        const products = [{name: 'tshirt', price: 100}, {name: 'computer', price: 5000}]
        const expected = [{name: 'tshirt', price: 200}, {name: 'computer', price: 10000}]
        test('price has doubled', () => {
            expect(doublePrice(products)).toEqual(expect.arrayContaining(expected))
        })
    })


    describe('and returns true if both values are true', () => {
        test('false if both are not true', () => {
            and(true, false)
            and(false, false)
            and(false, true)
        })

        test('true', () => {
            and(true, true)
        })

    })


    describe('removeLeadingTrailing removes leading and trailing zeros from a number, returning the number without leading/trailing', () => {
        test('removes trailing', () => {
            expect(removeLeadingTrailing('230.000')).toBe(230)
        })

        test('removes leading', () => {
            expect(removeLeadingTrailing('00402')).toBe(402)
        })

        test('removes leading and trailing', () => {
            expect(removeLeadingTrailing('03.1400')).toBe(3.14)
        })

        test('removes nothing if not necessary', () => {
            expect(removeLeadingTrailing('30')).toBe(30)
        })

        test('also works if argument is already a number', () => {
            expect(removeLeadingTrailing(230.000)).toBe(230)
            expect(removeLeadingTrailing(402)).toBe(402)
            expect(removeLeadingTrailing(3.1400)).toBe(3.14)
            expect(removeLeadingTrailing(30)).toBe(30)
        })
    })


    describe('getKeysAndValues takes an object and returns a new object with key "keys" where value is an array of its keys, and key "values" where value is an array of its values', () => {
        const obj = {a: 1, b: 2, c: 3}
        const result = getKeysAndValues(obj)

        test('return object has key "keys" and "values"', () => {
            expect(result).toHaveProperty('keys')
            expect(result).toHaveProperty('values')
        })

        test('result has keys array matching arguments keys and values array matching values', () => {
            expect(result).toMatchObject({
                keys: ['a', 'b', 'c'],
                values: [1, 2, 3]
            })
        })
    })

})

