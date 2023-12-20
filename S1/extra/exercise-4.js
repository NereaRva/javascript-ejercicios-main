const products = [{name: 'Gorra de rodilla', sellCount: 10},{name: 'Pantalón de pana', sellCount: 302},{name: 'Reloj de papel albal', sellCount: 23},{name: 'Inpar de zapatos', sellCount: 6}];


let totalPrice = 0

for (let i = 0; i < products.length; i++) {
    totalPrice += products[i].sellCount
}
console.log(`El total del precio es: ${totalPrice}`);

const numberOfproducts = products.length
const averageProducts = totalPrice / numberOfproducts

console.log(`La media de ventas es: ${averageProducts}`)
