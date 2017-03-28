# [Evolution UI](https://BovAcademy-opensource.github.io/evolution-ui/)

## Development guidelines

* All development is performed under the `assets` directory.

* Only `index.html` and `style.css` in the root directory are allowed to be edited, though those files might be moved to a `presentation` directory later on.

* Components are divided into two groups `evolution` and `standard`.

* Inside the `assets` directory are the following directories:
    * **html** - for the html files that you will use to develop the component, these files will have the minimum required html code to enable component functionality. In the root of this directory is a `TEMPLATE.html` file which is used as the starting point for creating html file for the component. Copy that file into `evolution` or `standard` directory depending on the type of component, rename it, and edit it. This html file links to Google Material icons, and to Roboto font family.

    * **images** - add any images you use in your components here, follow the directory structure to save the images into the correct subdirectory. Create a directory named after your component for all images that component uses.

    * **scripts** - here you are adding javascript for your files. Again, place the file in the correct subdirectory for the component type.

    * **stylesheets** - this directory follows a customized version of the  [7-1 sass structure](https://sass-guidelin.es/#architecture).

      * The `abstracts` folder holds all Sass tools and helpers used across the project (*mixins*, *functions*, **application-wide (a.k.a globals)** *variables*, and *placeholders*). In particular, *mixin* are placed into the `mixins` sub-folder and imported through the `_import-mixins.scss` file.

      * The `base` folder holds the boilerplate code for the project (reset, typography, etc.).

      * The `layout` folder contains everything that takes part in laying out the site (header, grid, footer, aside, etc.).

      * As its name suggests, the `components`  folder contains all the components. Components are distributed into two main categories,  `evolution`  or  `standard`, and each one has its own directory. Inside the component directory are your main sass files. For example, the Eyelids component has these two files: main file `_Eyelids.scss` and configuration file `_Eyelids-config.scss`. You can import configuration file into the main file to keep the configuration separate.

        **IMPORTANT NOTE:** Config variables in your configuration file must be always prefixed by the [ BEMit namespace + the component's name ]. If your component is called for example `Ruler`, a well structured config file could be:

        ​

        ```scss
        //----------------------------------------------------------------
        //                       RULER Component config
        //----------------------------------------------------------------

        $c-ruler_width: 200px;
        $c-ruler_font-size: 200px;
        ```

        More info about BEMit namespaces can be found into our [code style guide](CODE_styleguide.md).

        The file `_import-components.scss` is gathering all of the main sass files from all of the components. The `main.scss` file at the root of the `stylesheets` directory is collecting all of the scss files from subdirectories and this is the file that is compiled into `main.css` and saved into `production` root directory.

        Each component is imported through the `_import-components.scss` file.

      * The `pages` folder contains page-specific styles. it could be the right place for placing specific styles for the home page for example.

      * The `themes` folder contains different themes for the application.

      * The `vendor`folder contains all the CSS files from external libraries and frameworks – for example: Reset, Normalize, etc.

    * **sassdoc** - This directory contains all the SASS documentation for mixins, functions, and more. For using it as a reference, just open up your favorite browser and set as URL the path to that directory. No command is needed, no need to compile, nothing of nothing. If you are a command line fan you can also run `npm run sassdoc` to achieve the same result. If you want to generate an update version of the *sassDoc*, open your terminal/shell, go to the `assets` folder and digit: `sassdoc stylesheets/`. This will generate all the necessary things for you.

* The `legacy` directory in the root directory will be removed! Don't use it or it's content.

* Directory `production` contains the `main.css` and `main.js` files. When I find a way how to compile components separately, it will contain the directories for every component. Those should be the directories that the user can just download to use a single component. But that might be left for after the release. This directory won't be tracked by git, you will generate its content by running Grunt tasks. To enable live site preview on `gh-pages` site, the `.gitignore` file on the `gh-pages` branch will be altered not to ignore this directory.

* File `.editorconfig` enforces some coding styles. You must install a plugin for your editor that can use this file.

* All class names to be prefixed with `evo_` prefix.

* Use [Gitflow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows#gitflow-workflow)

## Installing Gulp tasks

1. First check if you system has node.js installed. In the command line type:

    ```bash
    node -v // v7.6.0
    ```

    if you have it, then check if you have `npm` (node package manager) installed:

    ```bash
    npm -v // 4.3.0
    ```

    If you don't have those installed, follow [these instructions](https://docs.npmjs.com/getting-started/installing-node) to install node.js and `npm`.

2. Now, install `gulp-cli`:

    `npm install -g gulp-cli` // '-g' means install it globally on your system

3. Now, it is time to install all needed packages. `cd` into your repository directory and run this command:

    `npm install`

4. After that use the following commands:

    * `npm start`: run the development environment with automatic reload on file change. Hot Module Repacement still not implemented
    * `npm run production`: production build with file hashes for a better cache management
    * `npm deploy`: deploy to GitHub pages and bump `package.json` version with a patch
    * `npm deploy:minor`: deploy to GitHub pages and bump `package.json` version with a minor version
    * `npm deploy:major`: deploy to GitHub pages and bump `package.json` version with a major version
    * `npm sassdoc`: see the sass documentation

6. You can stop gulp task by pressing `Ctrl + C` in the command line

## Important stuff

* ES6 modules: IIFE are not needed anymore. Export a function instead and import it in `app.js`:

  ```js
  export default function() {
  
  /* OFF CANVAS NAVIGATION COMPONENT  */
  /* ...  */
  
  }
  ```

  ```js
  import offCanvasNavigation from './standard/off_canvas_navigation'
  
  offCanvasNavigation();
  ```

* CSS and JavaScript are already added to `index.html`, just take care of importing the needed files to the respective sass and/or js tree.

## How to Contribute?

We are using [Gitflow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows#gitflow-workflow). The typical workflow will be the following:

- Fork the [original repository](https://github.com/BovAcademy-opensource/evolution-ui)
  - Add the original repository as a remote: `git remote add evolution https://github.com/BovAcademy-opensource/evolution-ui.git`
  - Checkout the `development` branch: `git checkout development`
  - From there, create a new feature branch with the name of your component (`git checkout -b my-new-component`) and start developing your component
  - Remember to rebase often to stay updated and minimize conflicts: `git pull --rebase evolution development`
  - When your component is ready, open a Pull Request to the `development` branch of the original repository. Your Pull Request will be reviewed as soon as possible
