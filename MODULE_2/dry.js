// we'll build a order processing system to understand dry and how important function is.
// DRY = Do not Repeat Yourself

function isVailidPrice(price) {
  return typeof price === "number" && price > 0;
}

function isValidEmail(email) {
  return email.includes("@") && email.includes(".");
}

function calculateDiscount(price, discountPercentage) {
  if (!isVailidPrice(price)) {
    return 0;
  }
  let discountAmount = (price * discountPercentage) / 100;
  return price - discountAmount;
}

function calculateFinalBill(price, vatPercentage = 15) {
  let vatAmount = (price * vatPercentage) / 100;
  return price + vatAmount;
}

function formateBDT(amount) {
  return `${amount.toFixed(2)} BDT`;
}

function capitalize(string) {
  if (!string) return "";
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function processOrder(user, itemPrice, discountCode) {
  console.log(`-----Processing order for ${capitalize(user.name)}-----`);
  if (!isValidEmail(user.email)) {
    console.log("Error: Invalid email address.");
    return;
  }

  let currentPrice = itemPrice;
  if (discountCode == "ART") {
    currentPrice = calculateDiscount(itemPrice, 20);
    console.log(`20% Discount applied. New price: ${formateBDT(currentPrice)}`);
  }

  let totlalBill = calculateFinalBill(currentPrice);
  console.log(`Final bill (including VAT): ${formateBDT(totlalBill)}`);
  console.log("Order processed successfully!");
}

let user1 = {
  name: "azminur",
  email: "azminur@example.com",
};

let user2 = {
  name: "rahman",
  email: "rahmanexample.com", // Invalid email
};

let user3 = {
  name: "tUshER",
  email: "tusher@example.com",
};

processOrder(user1, 1000, "ART");
console.log("\n");
processOrder(user2, 1500, "ART");
console.log("\n");
processOrder(user3, 2000, "");
