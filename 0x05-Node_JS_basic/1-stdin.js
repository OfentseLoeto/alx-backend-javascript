console.log("Welcome to Holberton School, what is your name?");

// If stdin is not connected to terminal (piped input)
if (process.stdin.isTTY) {
  process.stdin.on('data', function(data) {
    const input = data.toString().trim();

    console.log("Your name is:", input);
  });

  // Handle the end of the program when input is piped
  process.on('end', function() {
    console.log("This important software is now closing");
    process.exit();
  });
} else { // If stdin is connected to the terminal
  process.stdin.setEncoding('utf-8');

  process.stdin.on('data', function(data) {

    // Extracting user input
    const input = data.toString().trim();

    //Diplay user input
    console.log("Your name name is:", input);
  });

  // Handling  CTRL-C
  process.on('SIGINT', function() {
    console.log("\nThis importent software is now closing");
    process.exit();
  });
}
