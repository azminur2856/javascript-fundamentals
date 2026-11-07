// feel the real power of literals

// Math expression

let price = 500;
let quentity = 3;

console.log(
  `Total price: ${price * quentity} Taka\nPay the prices to get the product.`,
);

//function call
function getDiscount(price) {
  return price * 0.1;
}

console.log(
  `You saved ${getDiscount(price)} Taka.\nYour total bill is now ${price * quentity - getDiscount(price)} Taka.`,
);

let stock = 10;

console.log(
  `Status: ${
    stock > 0
      ? `In stock. ${stock} items available`
      : "Out of stock\nPlease check back later for availability."
  }`,
);
