(()=>{
  let isEnabled = true;
  console.log("🚀 ~ file: 05-booleans.ts ~ line 3 ~ isEnabled", isEnabled)
  let isNew: boolean = false;
  console.log("🚀 ~ file: 05-booleans.ts ~ line 5 ~ isNew", isNew)

  const random = Math.random();
  console.log('random',random);
  isNew = random < 0.3;
  console.log('is new', isNew);
})()
