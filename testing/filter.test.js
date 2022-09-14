const filter = require('../src/filter.js')

test('pass an empty array', () =>{

    expect (
        
        filter([],item => (item < 2) )
    
    ).toEqual('No Item to proces')

})

test('pass array of number', () =>{

    expect (
        
        filter([1,2,3,4,5],item => (item < 2) )
    
    ).toEqual([1])

})

