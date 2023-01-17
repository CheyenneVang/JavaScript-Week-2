const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const num = prompt('Enter number'); // Used prompt() function to accept a number

if (num < 1 || num > 12) {
    alert('This is an invalid number');
} else {
    console.log(months[num-1]);
}
// Example: months[1-1] will calculate to months[0] = January
// Example: months[3-1] will calculate to months[2] = March
// Example: months[0-1] will return the alert 