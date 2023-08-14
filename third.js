function sortMaker(arr) {
    for(let i=0; i<arr.length; i++){
        if(arr[i] < 0){
            return 'invalid input';
        }
    }
    if(arr[0] > arr[1]){
        return arr;
    }
    else if(arr[0] < arr[1]){
        let temp = arr[0];
        arr[0] = arr[1];
        arr[1] = temp;
        return arr;
    }
    else if(arr[0] == arr[1]){
        return 'equal';
    }

}

