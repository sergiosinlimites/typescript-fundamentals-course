(()=>{
  // Alias
  type UserID = string | number;
  let userId: UserID;
  // Literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Sizes;

  function greeting(text: UserID, shirtSize: Sizes){
    console.log('hello! ' + text);
    let rta: string | boolean;
    if(typeof text === 'string'){
      rta = text.includes('he');
    } else {
      rta = text.toFixed(2);
    }
    console.log(rta);
  }


  shirtSize = 'L';
})()
