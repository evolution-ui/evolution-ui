# seed-ui

- Each component gets its own sub-folder in the `components` folder.
- Add the scss partials of the components to the file named after you in the `partials` folder.
- Refer to `_jake.scss` for an example.
- Run `sass --watch components:css` to automatically compile scss.
- Use your named html file in the `html-temp` folder to write up your components.
- If you need fonts, Google Material icons have been added to each html file. (https://material.io/icons/ for usage instructions)
- All classes to be prefixed with `su_`

# Installing Grunt tasks

1. First check if you system has node.js installed. In the command line type:

    `node -v` // v7.6.0

    if you have it, then check if you have `npm` (node package manager) installed:

    `npm -v` // 4.3.0

    * if you don't have those installed, follow [these instructions](https://docs.npmjs.com/getting-started/installing-node) to install node.js and `npm`

2. Now, install `grunt-cli`:

    `npm install -g grunt-cli` // '-g' means install it globally on your system

3. Now, it is time to install all needed packages. `cd` into your repository directory and run this command:

    `npm install`

4. After that use the following commands:

    * `grunt` - this concatenates `js` files, compiles `sass` files, and watches for changes in those files
    * `grunt build` - build for production, uglifies JS, and compiles sass

5. The `main.js`, `main.min.js` and `main.css` are located in the `dist` directory on the root of the repository. **Make sure you link to those files in your HTML file**

6. You can stop grunt task by pressing `Ctrl + C` in the command line
