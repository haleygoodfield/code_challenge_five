// Task 1: Object Properties

// Declare an object customer with the properties name, age, and email
const customer = { name: "Noelle Fedorko", age: 20, email: "noellef@gmail.com"}; 

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
        console.log(`Order ID: ${this.orderID}`);
        console.log(`Total Amount: $${this.totalAmount}`);
        console.log(`Order Status: ${this.status}`);
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

// Declare an array prices 
const prices = [60, 90, 70];

// Use the .map() method to apply a 10% discount to each price
const discount = 0.9 // 10% discount 
const discountedPrices = prices.map(prices => prices * discount); 

// Log the new discounted prices to the console
console.log("Discounted Prices: $", discountedPrices);



// Task 5: Filter Method

// Declare an array inventory with at least five product quantities
const inventory = [0, 7, 13, 0, 25];

// Use the .filter() method to remove products with zero stock
const products = inventory.filter(quantity => quantity > 0);

// Log the filtered array to the console
console.log("Products Availble:", products);

 

// Task 6: Reduce Method

// Declare an array sales 
const sales = [920, 940, 960, 980];

// Use the .reduce() method to calculate total revenue
const totalRevenue = sales.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Log the result to the console
console.log(`Total Revenue: $${totalRevenue}`);

