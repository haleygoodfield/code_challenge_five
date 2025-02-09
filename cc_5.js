// Task 1: Object Properties

// Declare an object customer with the properties name, age, and email
const customer = { 
    name: "Noelle Fedorko", 
    age: 20, 
    email: "noellef@gmail.com"
}; 

// Log each property using console.log() and a template literal
console.log(`Customer's name: ${customer.name}`);
console.log(`Customer's Age: ${customer.age}`);
console.log(`Customer's Email: ${customer.email}`);



// Task 2: Object Methods 

// Declare an object order with properties orderID, totalAmount, and status
const order = {
    orderID: 56277, 
    totalAmount: 149.99, 
    status: "Order Confirmed",

    // Add a method displayOrder() inside the object to log the order details using this
    displayOrder: function() {
        console.log(`Order ID: ${this.orderID}, Total Amount: $${this.totalAmount}, Order Status: ${this.status}`);
    }
};
// Call the method and log the details
order.displayOrder();



// Task 3: Array Manipulation (push,pop,shift,unshift)

// Declare an array cartItems with three product names
let cartItems = ["Chips", "Buffalo Dip", "Diet Coke"];

//Add a new product to the cart using .push()
cartItems.push("Cookies");

// Remove the last item using .pop()
cartItems.pop();

// Add an item at the beginning using .unshift()
cartItems.unshift("Pub Sub");

// Remove the first item using .shift()
cartItems.shift();

// Log the final array to the console
console.log("Items in Shopping Cart:", cartItems);



// Task 4: Map Method

// Declare an array of prices 
let prices = [60, 90, 70];

// Use the .map() method to apply a 10% discount to each price
const discount = 0.9 // 10% discount 
let discountedPrices = prices.map(prices => prices * discount); 

// Log the new discounted prices to the console
console.log("Discounted Prices: $", discountedPrices);



// Task 5: Filter Method

// Declare an array inventory with at least five product quantities
let inventory = [0, 7, 13, 0, 25, 60];

// Use the .filter() method to remove products with zero stock
let products = inventory.filter(quantity => quantity > 0);

// Log the filtered array to the console
console.log(`Products Available: ${products}`);

 

// Task 6: Reduce Method

// Declare an array sales 
let sales = [920, 940, 960, 980];

// Use the .reduce() method to calculate total revenue
let totalRevenue = sales.reduce((total, sales) => total + sales, 0);

// Log the result to the console
console.log(`Total Revenue: $${totalRevenue}`);



// Task 7: find() Method 

// Declare an array of customers 
let customers = ["Jane", "Jana", "Joel", "Joe"];

// Use the .find() method to locate the customer "Joel"
let findCustomer = customers.find(customer => customer === "Joel");

// Log the result to the console
console.log(`Customer Located: ${findCustomer}`);



// Task 8: Function Declaration

// Write a function calculateTax(amount, taxRate).
function calculateTax(amount, taxRate ) {  // Function to return the calculated tax
    let tax = amount * taxRate;
    console.log(`Calculated Tax: $${tax}`); // Log using a template literal
    return tax;
};

calculateTax(15000,0.05); // Ammount 15,000, tax rate 5%



// Task 9: Function Expression

// Declare a function expression applyDiscount(price, discount)
const applyDiscount = function(price, discount) {
    let discountedPrice = price - (price * discount);
    console.log(`Discounted Price: $${discountedPrice}`); // // Log the result to the console using a template literal.
    return discountedPrice; // // Return the discounted price
}; 

applyDiscount(2000, .20); // Price at $2000, dicount of 20%



// Task 10: Arrow Functions 

// Write an arrow function calculatePoints(purchaseAmount)
const calculatePoints = (purchaseAmount) => { 
    let points = Math.floor(purchaseAmount / 10); // Return 1 point per $10 spent and log the result.
    console.log(`Points Earned for Rewards: ${points}`); // Log the result to the console using a template literal.
    return points;
}; 
calculatePoints(330); // $330 Dollars Spent
