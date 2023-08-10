function findAddress(obj) {
   let keys = Object.keys(obj);
   let values = Object.values(obj);
   if(keys.length === 2){
        values[2] = values[1];
        values[1] = '__';
        return values;
   }
   else if (keys.length === 1){
        values[1] = '__';
        values[2] = '__';
        return values;
   }
   else{
    return values;
   }
}

// let sample = {street: 10, house: '15A', society: 'Earth Perfect'};
let sample = {street: 10,  society: 'Earth Perfect'};

console.log(findAddress(sample));
    