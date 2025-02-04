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
// Call the method and log the details.
order.displayOrder();
