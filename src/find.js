function find (array, callback){
    
    if (array.length === 0){
        return 'No Item to proces'
    } 
    for (let item of array) {
        if (callback(item)) {
            return item;
        }
    }
    return undefined;
}
module.exports = find;
