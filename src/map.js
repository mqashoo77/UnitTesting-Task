function map(array, callback){

    if (array.length === 0){
        return 'No Item to proces'
    } 
    const mappedArray = []; 
    for (let item of array){
        mappedArray.push(callback(item)); 
    }
    return mappedArray; 
}

module.exports = map;