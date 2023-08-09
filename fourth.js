function findAddress(obj) {
   return Object.values(obj);
}

let sample = {street: 10, house: '15A', society: 'Earth Perfect'};
console.log(findAddress(sample));
    