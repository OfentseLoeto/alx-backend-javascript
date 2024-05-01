function userInput() {

  console.log("Welcome to Holberton School, what is your name?");

  if (process.stdin.isTTY) {
    process.stdin.on('data', function(data) {
      // Extracting user input
      const input = data.toString().trim();

      // Display user name
      console.log("Your name is:", input);

      // Exiting the program
      process.exit();
    });

    // Displaying a closing message when the program close
    process.on('exit', function() {
      console.log("This important software is now closing");
    });
  } else {
    process.stdin.on('data', function() {
      const data = data.toString().trim();
      
      console.log("Your name is:", input);

      process.exit();
    });
  }
}

// Calling the function
userInput();
