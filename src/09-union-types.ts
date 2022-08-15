(() => {
  let userId: string | number;
  userId = 12;
  userId = '124677';

  function greeting(text: number | string){
    console.log('hello! ' + text);
    let rta: string | boolean;
    if(typeof text === 'string'){
      rta = text.includes('he');
    } else {
      rta = text.toFixed(2);
    }
    console.log(rta);
  }
})()
