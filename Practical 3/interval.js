let count = 1;

const interval = setInterval(() => {
    console.log(`Execution Count: ${count}`);
    count++;
    
    // Stop the interval after 5 executions
    if (count > 5) {
        clearInterval(interval);
        console.log("Interval stopped.");
    }
}, 2000); // Executes every 2 seconds
