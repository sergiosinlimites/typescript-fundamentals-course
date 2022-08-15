import { addProduct, calcStock, products } from "./product.service";

addProduct({title: 'Titulo', createdAt: new Date(), stock: 1209, size: 'M'});
console.log(calcStock())
console.log(products);
