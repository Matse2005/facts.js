# RandomFacts.js

Get a random fact using the RandomFacts api.

---

## Requirements

For development, you will only need Node.js and npm, installed in your environement.

### Node

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
  Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###

---

## Install

- #### NPM

  ```console
  $ npm install --save randomfacts.js
  ```

- #### Clone

  ```console
  $ git clone https://github.com/matse2005/randomfacts.js
  $ cd randomfacts.js
  ```

## Configure app

Create a file app.js and inster the following code:

```javascript
const rf = require("randomfacts.js");

rf.getRandom().then((fact) => {
  console.log("Random: " + fact.fact);
});

rf.getCategory("example").then((fact) => {
  console.log("Category: " + fact.fact);
});
```

## Running the project

    $ node app.js

## Links

- [Documentation](https://docs.randomfacts.online/package/randomfact.js)
- [Add a fact by yourself](https://docs.randomfacts.online/)
- [RandomFacts discord serber](https://discord.gg/2mxUZR7pc7)
- [GitHub](https://github.com/matse2005/randomfacts.js)
- [NPM](https://www.npmjs.com/package/randomfact.js)
