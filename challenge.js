const nobelLaureates = require('./nobel-laureates.json')


function challenge1(obj) {
    /** 
    Write a function that takes an object and returns a modified version of argument.
    Input/Output:

    let arg1 = {
        a: 1
    }

    let result1 = {
        a: 1
    }

    let arg2 = {
        a: {
            aa: 1
        },
        b: {
            bb: {
                bbb: 2
            },
            bb2: 2.1
    }
    }

    let result2 = {
        'a.aa': 1,
        'b.bb.bbb': 2,
        'b.bb2': 2.1
    }
    
    */
    return null
}


function challenge2() {
    /**
    Write a function that groups Nobel Laureates by country, and gender as subgroup. 
    Use .map(), .filter() or .reduce() for loop interations
    Result must be sorted by A -> Z
    If there's no `data.bornCountryCode` property skip that item.

    let result = {
        AR: {
          female: ["Firstname Surname", ...],
          male: ["FirstName Surname", ...]  
        },
        ...
    }
     
    */

    return null
}

module.exports = {
    challenge1,
    challenge2
}