(()=>{
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  const products: any[] = []

  const login = (data: { email: string, password: string }) => {
    console.log({
      email: data.email,
      password: data.password
    })
  }

  const addProduct = (data: {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }) => {
    products.push(data);
  }

  addProduct({title: 'Titulo', createdAt: new Date(), stock: 1209, size: 'M'});
  console.log(products);
})()
