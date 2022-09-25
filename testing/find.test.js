const find = require('../src/find.js')

test('pass an empty array', () =>{

    expect (
        
        find([],item => (item == 2) )
    
    ).toEqual('No Item to proces')

})

test('pass array of number', () =>{

    expect (
        
        find([1,2,3,4,5],item => (item == 2) )
    
    ).toEqual(2)

})

