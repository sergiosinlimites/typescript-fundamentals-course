import { Product } from './product.model'

export const products: Product[] = []

export const addProduct = (data: Product) => {
  products.push(data);
}

export const calcStock = (): number => {
  return products.reduce((previous, current) => previous + current.stock, 0);
}
