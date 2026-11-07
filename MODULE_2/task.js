// task: koto gulo item kinechen and koto taka bill hoyasa shese BDT te dekhate hoba print kore
let cart = [
  { name: "Shirt", price: 1200, quantity: 2 },
  { name: "Pants", price: 1800, quantity: 1 },
  { name: "Shoes", price: 150, quantity: 3 },
];

let totalItems = 0;
let totalBill = 0;

for (let item of cart) {
  totalItems += item.quantity;
  totalBill += item.price * item.quantity;
}

console.log("Total items in the cart:", totalItems);
console.log("Total bill:", totalBill, "Tk");
