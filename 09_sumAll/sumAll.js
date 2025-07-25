const sumAll = function(a, b) {
    let larger = 0;
    let smaller = 0;

    if(a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)){
        return 'ERROR';
    }
    if(a>b){
        larger = a;
        smaller = b;
    }else if(b > a){
        larger = b;
        smaller = a;
    }else{
        return a+b;
    }

    let sum = a + b;

    for(let i = smaller+1; i < larger; i++){
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
