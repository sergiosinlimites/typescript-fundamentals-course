(()=>{
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }
  const products: Product[] = []

  const login = (data: { email: string, password: string }) => {
    console.log({
      email: data.email,
      password: data.password
    })
  }

  login({ email: 'sergio@sergio.com', password: '12345' });

  const addProduct = (data: Product) => {
    products.push(data);
  }

  addProduct({title: 'Titulo', createdAt: new Date(), stock: 1209, size: 'M'});
  console.log(products);
})()
