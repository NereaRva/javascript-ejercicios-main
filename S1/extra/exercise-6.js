const goodProducts = [];
const badProducts = [];
const products = [{name: 'Gorra de rodilla', sellCount: 10},{name: 'Pantalón de pana', sellCount: 302},{name: 'Reloj de papel albal', sellCount: 23},{name: 'Inpar de zapatos', sellCount: 6}];

for (let i = 0; i < products.length; i++) {
    const productActual = products[i]

    if (products.sellCount > 20) {
        goodProducts.push(products)
    }else {
        badProducts.push(products)
    }
}

console.log('Productos con más de 20 ventas:', goodProducts);
console.log('Prodctos con menos de 20 ventas:', badProducts);

//no me aparece el resultado!