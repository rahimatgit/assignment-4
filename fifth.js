function canPay(changeArray, totalDue) {
    let sum = 0;
    if(changeArray.length !== 0){
        for(let i=0; i<changeArray.length; i++){
            sum = sum + changeArray[i];
        }
        if(sum >= totalDue){
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return 'please insert a valid array';
    }
}

const notes = [1, 5, 5];
console.log(canPay(notes, 10));