(()=>{
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  function createProductToJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  ){
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  createProductToJson('P1', new Date(), 12, 'XL');

  const createProductToJsonV2 = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  ) => {
    return {
      title,
      createdAt,
      stock,
      size: size || 'L'
    }
  }
  console.log(createProductToJsonV2('new',new Date(), 12));
})()
