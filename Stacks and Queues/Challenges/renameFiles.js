const fs = require("fs");
const path = require("path");

// Directory path
const directoryPath = __dirname;

// Function to rename files
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }
  files.forEach((file) => {
    if (file.startsWith("Ch") && file.endsWith(".js")) {
      const oldPath = path.join(directoryPath, file);
      const newFileName = file.replace("Challengeallenges", "Challenge");
      const newPath = path.join(directoryPath, newFileName);

      fs.rename(oldPath, newPath, (err) => {
        if (err) {
          console.log("Error renaming file: " + err);
        } else {
          console.log(`Renamed ${file} to ${newFileName}`);
        }
      });
    }
  });
});
