const price1 = 8;
const ivaPrice1 = price1 * 1.21
const totalPrice1 = ivaPrice1 + 4.95

const price2 = 20;
const ivaPrice2 = price2 * 1.21
const totalPrice2 = ivaPrice2 + 4.95

function priceTotal(price) {
    const iva = 1.21;
    const gastosEnvio = 4.95;
    const priceIva = price * iva;
    const priceEnvio = price + gastosEnvio;
    const total = priceIva + gastosEnvio;
    return total;
  }

const priceOne = 8
const totalPriceOne = priceTotal(priceOne);

const priceTwo = 20
const totalPriceTwo = priceTotal(priceTwo);

console.log(totalPriceOne);
console.log(totalPriceTwo);