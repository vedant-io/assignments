//## Counter without setInterval

//Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let count = 0; // Initialize the counter variable

function incrementCounter() {
    console.log(count); // Print the current count
    count++; // Increment the count by 1
    setTimeout(incrementCounter, 1000); // Call the function again after 1 second
}

incrementCounter(); // Start the counter








































































//(Hint: setTimeout)