(()=>{
  let myDynamicVar: any = [];
  myDynamicVar = 2;
  myDynamicVar = 'hi hello';
  const rta = (myDynamicVar as string).length
  console.log("🚀 ~ file: 08-any.ts ~ line 6 ~ rta", rta)

  const otherRta = (<number>myDynamicVar).toFixed();
  console.log("🚀 ~ file: 08-any.ts ~ line 9 ~ otherRta", otherRta)
})()
