function filter(array, callback){

    if (array.length === 0){
        return 'No Item to proces'
    } 

    const filterdArray = []; 
    for (let item of array){
        if (callback(item)){
            filterdArray.push(item); 
        }
    }
    return filterdArray; 
}
module.exports = filter;