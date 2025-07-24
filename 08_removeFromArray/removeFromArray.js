const removeFromArray = function(array, ...params) {
    for(const param of params){
        array = array.filter(item => {
            return item === param ? false : true;
        });
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
