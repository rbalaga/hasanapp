const readfile = require("readline");
const fs = require("fs");

var application = readfile.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// application.close();

function getUserfilename() {
  application.question("Please provide filename: ", function (answer) {
    // Verify the existance of the file.
    if (!fs.existsSync(answer)) {
      // Creating the file.
      fs.appendFileSync(answer, "You are welcome");
      fs.appendFileSync("filenames.txt", answer + "\n");
      console.log("Hello user! you have entered :" + answer);
      getUserfilename();
    } else {
      console.log(answer + " file is already existing. provide a new file name.");
      getUserfilename();
    }
  });
}

getUserfilename();
