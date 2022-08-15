(()=>{

  // Inflicted doesn't work
  let myNull = null;
  let myUndefined = undefined;
  // This works
  let myRealNull: null;
  let myRealUndefined: undefined;

  let myNumber: number | null = null;
  myNumber = 12;

  let myString: string | undefined = undefined;
  myString = 'bla'

  function hi(name: string | null){
    if(name){
      console.log(`my name is ${name}`)
    } else {
      console.log('this is null')
    }
    let hello = 'Hello! '
    hello += name?.toLowerCase() ?? 'nobody';
    console.log("🚀 ~ file: 11-undefined-null.ts ~ line 24 ~ hi ~ hello", hello)
  }
  hi(myString);
})()
