function cubeNumber(number) {
    if(typeof number === 'number'){
        return Math.pow(number, 3);
    }
    else{
        return "please enter a valid number";
    }
}

console.log(cubeNumber(3))
