function reduce (array, callback){

    if (array.length === 0){
        return 'No Item to proces'
    } 

    let sum = 0 ; 
    for (let item of array) {
        sum = callback(item,sum); 
    }
    return sum; 
}
module.exports = reduce;