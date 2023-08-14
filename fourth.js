function findAddress(obj) {
     let str = "";
     if(typeof obj.street === "undefined"){
          str = str + '__,';
     }
     else{
          str = str + obj.street + ',';
     }
     if(typeof obj.house === "undefined"){
          str = str + '__,';
     }
     else{
          str = str + obj.house + ',';
     }
     if(typeof obj.society === "undefined"){
          str = str + '__,';
     }
     else{
          str = str + obj.society;
     }

return str;
}


     