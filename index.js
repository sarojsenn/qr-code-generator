// 1. Use the inquirer package to prompt the user for a URL
//2. Use the qrcode package to generate a QR code for the URL
//3. create a txt file to save the user input and the native fs node module
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
inquirer
  .prompt([
    {
        message: 'Please enter a URL:',
        name: 'URL',
    }
  ])
  .then((answers) => {
    const url = answers.URL;
    //Generate QR code
    var qr_svg = qr.image(url);
qr_svg.pipe(fs.createWriteStream('qr_img.png'));
// Save the URL to a text file
fs.writeFile(`URL.txt`, url, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
}); 
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.error('Prompt could not be rendered in the current environment.');
    } else {
      // Something else went wrong
      console.error(error);
    }
  });