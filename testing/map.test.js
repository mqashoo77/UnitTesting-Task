const map = require('../src/map.js')

test('pass array of number', () =>{

    expect (
        
        map([1,2,3,4,5],item => (item * 2) )
    
    ).toEqual([2,4,6,8,10])

})
test('pass an empty array', () =>{

    expect (
        
        map([],item => (item * 2) )
    
    ).toEqual('No Item to proces')

})



