

module.exports = {

dataTypes: function(arg){

  if (typeof arg === "string"){     //We check if our arguments is a string 
    return arg.length
  }

  if(typeof arg === "boolean"){    //we check if it is boolean
    return arg
  }

  if (typeof arg === "undefined" ){   //check if it is undefined
    return "no value"
  }

  if(typeof arg === "object") {      //check if it is an object
    if(arg instanceof(Array)){
      if(arg.length >2){

        return arg[2]
      }
      else if(arg.length === 2){ 
         return "undefined"
      }
      else {
        return
      }

    }
    else{
      return "no value"
    }

  }
  if (typeof arg === "number"){   //check if it is a number
    if(arg < 100){
      return "less than 100"
    }

  if (arg === 100){
      return "equal to 100"
    }
    else{
      return "more than 100"
    }
  }

  

  if (typeof arg === "function"){   //check if it is a function
    return arg(true)
  }

}}    




 