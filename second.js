function matchFinder(string1, string2) {
    if(typeof string1 === 'string' && typeof string2 === 'string'){
       if(string1.includes(string2)){
        return true;
       }
       else{
        return false;
       }  
    }
    else{
        return 'Please enter a valid string';
    }
}

console.log(matchFinder('John doe', 3))

