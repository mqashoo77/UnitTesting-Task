const reduce = require('../src/reduce.js')

test('pass an empty array', () =>{

    expect (
        
        reduce([],item => (item * 2) )
    
    ).toEqual('No Item to proces')

})

test('pass array of number', () =>{

    expect (
        
        reduce([1,2,3,4,5],(item,sum) => (item+sum) )
    
    ).toEqual(15)

})

