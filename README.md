# QR Code Generator CLI  
A simple Node.js command-line application that generates a QR code image from a user-provided URL and saves both the QR code and the URL to files.

---

## Features

- **Interactive Prompt:** Uses [Inquirer.js](https://www.npmjs.com/package/inquirer) to prompt the user for a URL in the terminal.
- **QR Code Generation:** Generates a QR code image (`qr_img.png`) for the entered URL using the [qr-image](https://www.npmjs.com/package/qr-image) package.
- **Save Input:** Saves the entered URL to a text file (`URL.txt`) using Node.js's native `fs` module.

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/)

---

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/qr-code-generator.git
   cd qr-code-generator
   ```

2. **Install dependencies:**
   ```bash
   npm install inquirer qr-image
   ```

---

## Usage

1. **Run the application:**
   ```bash
   node index.js
   ```

2. **Follow the prompt:**
   - Enter the URL when asked (e.g., `https://example.com`).

3. **Output:**
   - A file named `qr_img.png` will be created in your project directory containing the QR code for the URL.
   - The entered URL will be saved to a file named `URL.txt`.
   - You will see a confirmation message when the files are saved.

---

## Example

```
? Please enter a URL: https://example.com
The file has been saved!
```

- `qr_img.png` – Contains the QR code image for the URL.
- `URL.txt` – Contains the entered URL.

---

## Code Overview

```js
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
    // Generate QR code
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));
    // Save the URL to a text file
    fs.writeFile('URL.txt', url, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error('Prompt could not be rendered in the current environment.');
    } else {
      console.error(error);
    }
  });
```

---

## Notes

- Make sure your terminal supports interactive prompts.
- You can modify the filenames or prompt messages as needed.

---

## License

MIT

---

## Acknowledgements

- [Inquirer.js](https://www.npmjs.com/package/inquirer) for interactive CLI prompts[1][2][3][6].
- [qr-image](https://www.npmjs.com/package/qr-image) for QR code generation.
- Node.js `fs` module for file operations.
