# Contributing Guidelines

- [Setting up the workflow](#setting-up-the-workflow)
- [Building a component](#building-a-component)
    - [Understanding the framework's structure](#understanding-the-frameworks-structure)
    - [Naming Conventions](#naming-conventions)
      - [Namespace](#namespace)
    - [JS hooks](#js-hooks)
        - [✖ - NOT worthwhile](#️-not-worthwhile)
        - [✔ - worthwhile](#️-worthwhile)
    - [State Hooks](#state-hooks)
    - [Configuration](#configuration)
    - [Run your component in the browser](#run-your-component-in-the-browser)
        - [ES6 Module](#es6-module)
        - [Writing safe JavaScript code](#writing-safe-javascript-code)
    - [Setting up the HTML markup and SASS](#setting-up-the-html-markup-and-sass)
    - [Import Stylesheets and app.js](#import-stylesheets-and-appjs)
    - [Sassdoc](#sassdoc)
    - [Let's code with SASS](#lets-code-with-sass)
        - [Make use of comments for improve readability](#make-use-of-comments-for-improve-readability)
        - [How to reference the correct CSS selector](#how-to-reference-the-correct-css-selector)
    - [How to push your component on the repository](#how-to-push-your-component-on-the-repository)
- [Add a component to the showcase website](#add-a-component-to-the-showcase-website)
- [Additional resources](#additional-resources)
- [Quick recap](#quick-recap)

## Setting up the workflow

**IMPORTANT:** Please first make sure you have the [required software][readme-required] installed on your local machine.

We use the [Gitflow Workflow][gitflow] for this project. If you would like to make a contribution the project, please first follow these steps to setup the proper workflow:

1. Instead of cloning, first fork the [original repository][repo] and clone your fork to your local machine:

    ```bash
    git clone git@github.com:[YOUR-USERNAME]/evolution-ui.git
    ```

2. Add the [original repository][repo] as a remote so you can push to it later:

    ```bash
    git remote add upstream https://github.com/BovAcademy-opensource/evolution-ui.git
    ```

3. Checkout the `development` branch:

    ```bash
    git checkout development
    ```

    **IMPORTANT:** All work stems from the `development` branch. Never start new work directly from the `master` branch, or work directly on the `master` branch.

4. If you haven’t yet, install the the required packages for the framework and the showcase website by running the following command(s):

    ```bash
    npm install
    cd docs/
    gem install bundler
    bundle install
    ```

5. From the `development` branch, create a new feature branch that describes your contribution in a few short words (e.g. `my-new-component`) and begin working:

    ```bash
    git checkout -b my-new-component
    npm start
    ```

6. Remember to rebase often to stay updated and minimize conflicts:

    ```bash
    git pull --rebase upstream development
    ```

7. When your component is ready, [submit a Pull Request][pull-request] to the `development` branch of the original repository. Your work will be reviewed by one of the core maintainers, as soon as possible.

## Building a component

This tutorial will give you the fundamentals on how to build a new **evolution** component for Evolution UI.

Let's imagine that we want to build a new component called `super-easy`.

After setting up the workflow above, create a new branch for your new component from the `development` branch:

```bash
~ [development]$ git checkout -b c-super-easy development
```

Please, note the use of the `c-` prefix before the actual component's name.

**Remember to rebase often to stay updated and minimize conflicts**:

```shell
~ [c-super-easy]$ git pull --rebase upstream development
```

Now we are ready to work at our component by staging and committing the changes on the new dedicated branch.

**NOTE**: The `.css`, `.css.map` and other output files should not be tracked.

### Understanding the framework’s structure

In Evolution UI we tried to define an easy and well-separate structure. To this end, each component is placed in a separate subfolder.

The main path for components is `evolution-ui/assets/`

Components are distributed into two main categories , `evolution` or `standard`, and based on its type, each one has its own directory:

* HTML path:
  *  `evolution-ui/assets/html/[evolution|standard]/component-name.html`
* Javascript path:
  *  `evolution-ui/assets/scripts/[evolution|standard]/component-name.js`
* SASS path:
  *   `evolution-ui/assets/stylesheets/[evolution|standard]/component_name/_component-name.scss`

```
evolution-ui/
    |
    |- assets/
          |
          | - html
          |     |
          |     |- evolution/
          |     |      |
          |     |      | - eyelids.html
          |     |
          |     |- standard/
          |            |
          |            | - animations.html
          |            | - audio.html
          |
          | - scripts
          |      |
          |      |- evolution/
          |      |      |
          |      |      | - eyelids.js
          |      |
          |      |- standard/
          |             |
          |             | - animations.js
          |             | - audio.js
          |
          |
          | - stylesheets/
          |         |
          |         |
          |      components/
          |         |
          |         | - evolution/
          |         |        |
          |         |        |
          |         |      Eyelids   # The Eyelids component
          |         |         |
          |         |         | -  _eyelids-config.scss
          |         |         | -  _eyelids.scss
          |         |
          |         |
          |         | - standard/
          |         |      |
          |         |      |
          |         |      |-   animations  # The Animations component
          |         |      |      | -  _animations-config.scss
          |         |      |      | -  _animations.scss
          |         |      |      | -  ...
          |         |      |
          |         |      |-   audio     # The Audio component
          |         |      |      | -  _audio-config.scss
          |         |      |      | -  _audio.scss
          |         |      |      | -  ...
          |         |
          |         |
          |         |- _import-components.scss
          |
          |- app.js
```

For example, the Eyelids component is an **evolution** component and it's main files are:

- HTML:
    - `evolution-ui/assets/html/evolution/eyelids.html` - (known as *preview file*)
- JavaScript path:
    - `evolution-ui/assets/scripts/evolution/eyelids.js`
- SASS path:
    - `evolution-ui/assets/stylesheets/evolution/eyelids/_eyelids.scss`
    - `evolution-ui/assets/stylesheets/evolution/eyelids/_eyelids-config.scss`

Looking at the SASS dir, we can see that the Eyelids component has two main files: `_Eyelids.scss` and a configuration file called `_Eyelids-config.scss`. You can import configuration files into the main file to keep the configuration separate.

Each SASS component is imported through the `_import-components.scss` file.

### Naming Conventions

We want to ensure that each class and setting adhere to our conventions and are meaningfully named without worry about the length of them.

Each complex *part* in the Evolution UI framework must be represented as a **component**.

We follow these simple rules:

* lowercase names
* BEM-like naming for most classes
* hypen-delimited for everything else
* namespaces
* each component must be prefixed by the contraction of the framework's name - `evo_`

#### Namespace

A namespace represents a way for giving a *semantic meaning* to ordinary classes.

 A namespace could be used for:

- Classes
- Settings
- Mixins
- Functions

In *Evolution UI*, namespaces are all prefixed with a letter followed by a hyphen.

The following table shows common elements and their meanings

| TYPE             | PREFIX       | Evolution UI - Mixin Name | EXAMPLES                       |
| ---------------- | ------------ | :-----------------------: | ------------------------------ |
| Component        | `c-`         |            `c`            | `evo_c-card` `evo_c-checklist` |
| Layout module    | `l-`         |            `l`            | `l-grid` `l-container`         |
| Helper           | `h-`         |            `h`            | `h-show` `h-hide`              |
| Object           | `o-`         |            `o`            | `o-media`                      |
| States           | `is-` `has-` |            `s`            | `is-visible` `has-loaded`      |
| JavaScript hooks | `js-`        |                           | `js-tab-switcher`              |

Examples of common namespaces are:

- `l-`: **Layout Modules**

  *Examples:*

  - `.evo_l-grid` // class with the prefix
  - `.l-grid`        // class without the prefix
  - `$l-grid-gutter` // scss variable

- `c-`: **Components**

  - `.evo_c-card` // class with the prefix
  - `$c-card-height` // scss variable


- `h-`: **Helpers**

  *Examples:*

  - `.h-text--bold` // class without the prefix
  - `.evo_h-text—bold` // class with the prefix
  - `$h-text-bold-weight` // scss variable

- `t-`: [Themes](http://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/#theme-namespaces-t-)

  *Examples:*

  - `.evo_t-default` // class with the prefix
  - `.t-default` // class without the prefix
  - `$t-default-color` // scss variable

Others:

- `js-` JS Hooks
- `is-`/`has-` State Hooks

### JS hooks

As a rule of thumb, combining the visual aspect (CSS) and the behavior (JS) onto the same class in your HTML is not wise. This is because doing so you run the risk of breaking your application since you can’t have (or remove) one without (removing) the other. It is smarter, cleaner, and more maintainable to bind your JS onto specific classes like in the following examples:

###### ✖️ NOT worthwhile

- `js-trigger`
- `js-close-button`

###### ✔️ worthwhile

- `js-evolution-menu-trigger`
- `js-evolution-menu-target`
- `js-evolution-menu-list`
- `js-evolution-menu-close-button`

### State Hooks

Certain styles are *state* based, for example

- A link may be in an active state;
- A button may be clicked
- A drop down menu may be in a visible state

The following are worthwhile examples of state hooks:

- `is-active`
- `has-loaded`
- `is-loading`
- `is-visible`
- `is-disabled`
- `is-expanded`
- `is-collapsed`

More info on how to use namespaces and their intrinsic meanings can be found [here](https://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/)

### Configuration

Each component comes with a separate file which is named `component-name-config.scss` which contains all the variables, placeholders and component-specific settings.

Variables, placeholders, and other helpers placed within the *config* file must be prefixed by the namespace and the actual component name.

Let's see an example:

```scss
//----------------------------------------------------------------
//                    Super-Easy Component config
//----------------------------------------------------------------

// The component's name - not mandatory but highly recommended
$c-super-easy-name: 'super-easy'

// Component's variables
$c-super-easy-width: 200px;
$c-super-easy-font-size: 200px;

// Component placeholder
%c-super-easy-pointer {
  cursor: pointer;
}

```

The component's name is not mandatory but it is **highly recommended** since it could come to the rescue with references later on.

### Run your component in the browser

Evolution UI makes use of Gulp for tasks execution.

To get more information on that, please read the **Installing Gulp tasks** in the [README.md](https://github.com/BovAcademy-opensource/evolution-ui/tree/development) file.

After you started the development environment with the command `npm start`, your default browser will show up and the *preview file* will be visible at the following URL:

`http://localhost:3000/temp/[evolution|standard]/component-name.html`

**IMPORTANT NOTE**: *npm* sometimes has problems with module dependencies. When you see error messages like `Module not found: Can't resolve ...` or `Cannot find module ...`, run `npm update` in your command line.

#### ES6 Module

Evolution UI makes use of ES6 modules to handle components' dependencies. Our goal is to build a dependency tree from our root file (`app.js`).

- The most simple case is having a single default export. Within your `component-name.js` file make use of the ES6's `export default` directive to export it globally. Then, you can import and execute your component's script through the `app.js` file. **You can only have one default export per file**:

  ```javascript

  //--------component-name.js--------
  export default function() {

  /* The Javascript content for your component   */

    /* [ ... ] */

  }

  //--------app.js--------

  // The component-name is the name of your script without the extension
  import c-component-name from './[standard|evolution]/component-name'

  // execute it
  c-component-name();
  ```

- You can have several named exports and import them individually or as a whole:

  ```javascript

  //--------utils.js--------
  export function add() {...}
  export const substract = function() {...}

  //--------app.js-------- individual import --------
  import {add, substract} from './utils'

  // execute it
  add();
  substract();

  //--------app.js-------- import as a whole --------
  import * as utils from './utils'

  // execute it
  utils.add();
  utils.substract();
  ```

- Finally, you can have both named and default exports:

  ```javascript

  //--------utils.js--------
  export function add() {...}
  export const substract = function() {...}

  export default function () {...}

  //--------app.js--------
  import defaultFunction, {add, substract} from './utils'

  // execute it
  add();
  substract();

  defaultFunction();
  ```
  You can find all you need to know on ES6 modules [here](http://2ality.com/2014/09/es6-modules-final.html).

#### Writing safe JavaScript code

By writing safe JavaScript code we mean writing the code that won't break other components in the framework.

**How is it possible to break other component's code if the code of each component is in it's own module?**

It is possible because if one module throws an unhandled error, then program execution stops and all of the JavaScript code coming after the component that threw the error will not work. Here is one example. Let's have this JavaScript code:

```javascript
var listItems = document.querySelectorAll('.my-list-item'),
    i, len = listItems.length;

for ( i = 0; i < len; i++ ) {
    // our list items could represent the accordion sections for example, and by clicking them we expand the section
    listItems[i].addEventListener('click', expandItem);
}
```

If there are list items on the page with the class `.my-list-item`, then this code will work without problem. But what happens when there are no elements on the page with the class `.my-list-item`, and why would that be the case? Remember, this is the UI framework and it has a lot of UI components and the users in most cases won't be using all of the components, so the elements with the class `.my-list-item` might not be included on the page. The main JavaScript file, `app.js`, holds the code for all of the components from the framework, and most of the time users will use that file instead of picking the individual components JavaScript files.

So, if there are no elements with the class `.my-list-item`, in our example, the second line might throw an error like this: `Cannot read property 'length' of undefined`. This happens because the variable `listItems` is not defined since there are no elements with class `.my-list-item` found on the page, therefore we can't do `listItems.length` on an 'undefined' value. And especially we cannot assign event listeners to undefined variables.

That means that all components must have a safeguard mechanisms in case that the DOM elements they need to work with are not present in the DOM (i.e. on the page).

**How to prevent this error from stopping the execution of other JS code?**

Easy, wherever we are doing some actions on the elements from the DOM, we should first check if those elements exist. So, here is how the previous example could be made safer:

```javascript
var listItems = document.querySelectorAll('.my-list-item'),
    i,
    len = listItems && listItems.length || 0;
// if the 'listItems' is defined, then we will read 'listItems.length' and assign it
// to the 'len' variable, else we assign the zero value to 'len'

// if the len is zero, this loop won't run at all, so no event listener assignment will be attempted
for ( i = 0; i < len; i++ ) {
    listItems[i].addEventListener('click', expandItem);
}
```

**So, how to catch all of those possibilities, what if my JS file is Jumbo sized?**

The most effective way that I can think of is to remove all html from the `<body>` of the html page while keeping the scripts linked to the html file. Then open the html file and open the console to see if there are any errors reported. Those errors might not have to do anything with the issue I am describing, but if the issue is present, then those errors will be displayed, and you can go to your code and add the checks that will skip the code blocks for cases where there is no html to work on.

**INTERESTING OBSERVATION**

This errors were plaguing our framework just a week before I wrote this instructions. While I was writing this instructions, I checked the error example code I have provided, and there were no errors reported. Also, other code was checked where the safeguards were removed, and the browsers did not throw any errors. So, either there was an update in how the browsers handle those errors, or I need to take a couple of days off. :D

In any case, please do check your scripts with the empty html files just to be sure. If there are no errors, then you're probably all set to safely include your component into the framework.

### Setting up the HTML markup and SASS

As we stated at the beginning of this guide, we follow a BEM-like naming convention for our classes. So, let's see for example, how could we build an UI component which contains a *header*, a *body*, and a *footer*.

```html
<article class="evo_c-super-easy">

  <header class="evo_c-super-easy__header">
    <h2 class="evo_c-super-easy__title">The Title</h2>
  </header>

  <div class="evo_c-super-easy__body">
    <p class="evo_c-super-easy__paragraph">This is my new component</p>
    <button class="evo_c-super-easy__button">Button</button>
  </div>

  <footer class="evo_c-super-easy__footer">
    <p class="evo_c-super-easy__copy">&copy; author</p>
  </footer>

</article>
```

What if we want to provide a variation for the paragraph element which makes the text *uppercase* for example?

In this case, a good way to satisfy the newly request could be to define a helper class. Helper classes should always have a *unique* responsibility.

```html
 <div class="evo_c-super-easy__body">
    <p class="evo_c-super-easy__paragraph h-text--uppercase">This is my new component</p>
   <button class="evo_c-super-easy__button">Button</button>
 </div>
```

**IMPORTANT Note:** Don't forget to add your markup into your preview file. To this end, read the **Displaying The Code For Components You Contribute** section at the end of the [README.md](https://github.com/BovAcademy-opensource/evolution-ui/tree/development)

### Import Stylesheets and app.js

In your `component-name.html` file (which will be located at `evolution-ui/assets/html/[evolution|standard]/component-name.html`), you need to import all the necessary assets.

Import stylesheets:

```html
<!-- Import Material Icons and Roboto Fonts -->
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Roboto+Slab|Roboto:300,400,700" rel="stylesheet">

<!-- import main.css -->
<link href="../../styles/main.css" rel="stylesheet">
```

Then, at the end of your html file, import the app.js file:

```html
<script type="text/javascript" src="../../scripts/app.js"></script>
```

**Tip**: In Evolution UI there is boilerplate file (called `TEMPLATE.html`) which contains all the necessary imports for your components. Use it for speeding up your work.

Okay, we are ready for SASS but before coding, let's take a look at predefined mixins and functions provided by the framework.

### Sassdoc

Evolution UI contains a list predefined *mixins* and *functions* which speed up your development process and give you the capability of being operative in a moment.

To see them, type in your favorite shell or command line the following command:

```shell
~ $ npm run sassdoc
```

This will open up your predefined browser and show you the Evolution UI documentation for Sass.

### Let's code with SASS

Having defined the HTML markup, let's see how to implement each class using the provided tools.

---------------------------

In Evolution UI, there are a list of mixins and functions which can speed up your workflow.

Take a look at the following usage examples:

* [BEM & BEMit naming conventions through mixins](http://www.sassmeister.com/gist/9efa03e3a6d7fee563d5b51ef2742cbf)

* [Eyelids - refactoring example](http://www.sassmeister.com/gist/a009213e4ab148ac6ae808ce7fc9955e)

* [Background & Text color variants](http://www.sassmeister.com/gist/08edd5072f77749bebca0081201de9a8)

* [Evolution UI - color palette](http://www.sassmeister.com/gist/d384a2c6746a3c4045b49512e6795aa6)

For a complete list of these utilities, take a look at the internal sassdoc. Type in your shell the command: `npm run sassdoc`

---------------------------

The intended files for SASS must be placed inside the `stylesheets` dir:

```
evolution-ui/
    |
    |- assets/
          |
          | [ ... ]
          |
          |
          | - stylesheets/
          |         |
          |         |
          |      components/
          |         |
          |         | - evolution/
          |         |        |
          |         |        |
          |         |      super-easy   # The Super easy component
          |         |         |
          |         |         | -  _super-easy-config.scss
          |         |         | -  _super-easy.scss
```

At this point, we need to import the new component into the SASS system (if it's not already present). To do this, we need to open the `_import-components.scss` file, and based on the component's type, we add a specific entry at the end of of the list  [`evolution` or `standard` ].

``` scss
// Path: evolution-ui/assets/stylesheets/components
//
// -----------------------------------------------------------------------------
//                                  COMPONENTS FOLDER
// -----------------------------------------------------------------------------
//
//  It contains all kind of specific modules
//

//
// List of EVOLUTION components
//
// [...]
//
// Append your component here if it's type is 'evolution'
@import 'evolution/component-name/component-name';

//
// List of STANDARD components
//
// [...]
//
// Append your component here if it's type is 'standard'
@import 'standard/component-name/component-name';
```

Then, we are ready to take care of the component's configurations:

```scss
// Since our component is of type 'evolution', its folder is
// Path: evolution-ui/assets/stylesheets/evolution/super-easy/_super-easy-config.scss

//----------------------------------------------------------------
//                 Super-Easy Component config file
//----------------------------------------------------------------

// The component's name - not mandatory but highly recommended
$c-super-easy-name: 'super-easy'

// Component's variables
$c-super-easy-width: 200px;
$c-super-easy-font-size: 200px;
$c-super-easy-background-color: get-color('secondary', 'light');

// Element's variables
$c-super-easy-header-height: 100px;
$c-super-easy-body-height: 400px;
$c-super-easy-footer-height: $c-super-easy-body-height;

$c-super-easy-button-border-color: #000;

$c-super-easy-copy-font-family: "Times New Roman", Times, serif;

// Component placeholder
%c-super-easy-pointer {
  cursor: pointer;
}
```

As you can imagine, Evolution UI has a defined color palette which can be found in the [SassDoc](#Sassdoc). Using the predefined `get-color` function, you can extract a desired color and its variants with ease. There exist also two mixins ( `backgroundVariants` and `textVariants` ) that can be used for generating color variations for backgrounds a texts (usage examples and more information in our [SassDoc](#Sassdoc)).

Let's move on the main SCSS file:

```scss
// Path: evolution-ui/assets/stylesheets/evolution/super-easy/_super-easy.scss

//----------------------------------------------------------------
//                 Super-Easy file
//----------------------------------------------------------------

// Import component's settings
@import 'super-easy-config';

// This will be rendered to ./evo_c-super-easy
@include c( 'super-easy' ) {

  width: $c-super-easy-width;
  font-size: $c-super-easy-font-size;
  background-color: $c-super-easy-background-color;

    // This define a helper class
    // It will be rendered to .h-txt
    @include h( 'txt' ) {

      // This represents a modifier in the BEM terminology
      // It will be rendered to .h-txt--uppercase
      @include m( 'uppercase' ) {
        text-transform: uppercase;
      }
      // I may define some other modifiers (if needed)
      // It will be rendered to .h-txt--capitalize
      @include m( 'capitalize' ) {
        text-transform: capitalize;
      }
    }

    // This will be rendered to .evo_c-super-easy__header
    // The 'header' element
    @include e( 'header' ) {
      height: $c-super-easy-header-height;
    }

    // This will be rendered to .evo_c-super-easy__body
    // The 'header' element
    @include e( 'body' ) {
      height: $c-super-easy-body-height;
    }

    // This will be rendered to .evo_c-super-easy__footer
    // The 'footer' element
    @include e( 'footer' ) {
      height: $c-super-easy-footer-height;
    }

    // This will be rendered to .evo_c-super-easy__title
        // The 'title' element
    @include e( 'title' ) {
      color: get-color('accent', $opacity: .6);
    }

    // This will be rendered to .evo_c-super-easy__paragraph
    // The 'paragraph' element
    @include e( 'paragraph' ) {
      font-size: 1.1rem;
    }

    // This will be rendered to .evo_c-super-easy__button
    // The 'button' element
    @include e( 'button' ) {
      border: 2px solid $c-super-easy-button-border-color;
    }

    // This will be rendered to .evo_c-super-easy__copy
    // The 'copy' element
    @include e( 'copy' ) {
      font-family: $c-super-easy-copy-font-family;
      font-size: .8rem;
    }
}
```

#### Make use of comments for improve readability

To make your `.scss` maintainable and well structured, you can exploit *single line comments* to add meanings and improve readability. In SASS, *single line comments* start with `//` and are removed by the  `.scss` pre-processor, so they won't appear in your .css file.

Let's see at an example:

```scss
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //                             HEADER ELEMENT
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  @include e( 'header' ) {

  }

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //                             BODY ELEMENT
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  @include e( 'body' ) {

  }

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //                             FOOTER ELEMENT
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  @include e( 'footer' ) {

  }
```

And you could use a slightly different version of comment for modifiers, too:

```scss
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //                             HEADER ELEMENT
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  @include e( 'header' ) {

    width: 80%;
    height: 200px;


    //--------------------------------------------------------------------------
    //                         LOW -- HEADER MODIFIER
    //--------------------------------------------------------------------------

    @include m ( 'low') {
      height: 100px;
    }

  }
```

Now, at a glance, you should be able to find your items in an easy way.

#### How to reference the correct CSS selector

Some times we need to reference siblings element through the predefined CSS selector.

For example, what if we want to add some CSS properties to buttons element only if they are adjacent siblings of paragraphs element?

With our previous code, make a reference is not easy unless you hard-coded the selector within the paragraph element, like in the following example:

```scss
// This will be rendered to .evo_c-super-easy__paragraph
// The 'paragraph' element

@include e( 'paragraph' ) {
  font-size: 1.1rem;

  & + .evo_c-super-easy__button {
     padding-left: 40px;
  }
}
```

In the previous snippet of code, within the *paragraph* element we try to reference
the *button* element which is defined somewhere else in the file but not in the same `@include` directive.

Here is where the `getBEMselector` comes to the rescue. Instead of writing an hard-coded selector by hand, this function provides you the right selector with ease:

```scss
// This will be rendered to .evo_c-super-easy__paragraph
// The 'paragraph' element

@include e( 'paragraph' ) {

  $reference-selector: getBEMReference($c-super-easy-name, 'button');

  font-size: 1.1rem;

  & + .#{$reference-selector} {
     padding-left: 40px;
  }
}
```

Which is much better!

So there's that, but then there's one small, but very important, detail. If the component's name will change in the future, and the `$c-super-easy-name` config variable will change accordingly, the selector won't work anymore. This because of the fact that, before, we have defined the component's name by hand:

```scss
// Path: evolution-ui/assets/stylesheets/evolution/_super-easy.scss

//----------------------------------------------------------------
//                 Super-Easy file
//----------------------------------------------------------------

// Import component's settings
@import 'super-easy-config';

// This will be rendered to ./evo_c-super-easy
@include c( 'super-easy' ) {

  // [...]
```

So, let's change it:

```scss
// Path: evolution-ui/assets/stylesheets/evolution/_super-easy.scss

//----------------------------------------------------------------
//                 Super-Easy file
//----------------------------------------------------------------

// Import component's settings
@import 'super-easy-config';

// This will be rendered to ./evo_c-super-easy
@include c( $c-super-easy-name ) {

  // [...]
```

Now, if the component's name will change, our component won't be broken.

**IMPORTANT NOTE**: You don't need to add vendor prefixes to your css rules since Evolution UI makes use of `autoprefixer`.

### How to push your component on the repository

As a rule of thumb, each component must be reviewed before getting into the framework.

When you are ready to push your work on the repository, just do it on the remote with the following command:

```shell
~ $ git push origin c-super-easy
```

At this point, you're ready for open a new [pull request](https://help.github.com/articles/creating-a-pull-request/)

-----------------------------------------------------------------

​                  **Note**:  The target branch of your pull-request is the `development` branch.

----------------------------------------------

Your component is now ready for a review by the Evolution UI core team.

## Add a component to the showcase website

The showcase website is where we display component demos and markup to the public. It is built using [Jekyll](https://jekyllrb.com), a powerful and simple static site generation tool written in [Ruby](https://www.ruby-lang.org/en/).

The code for the showcase website is located in the `/docs` directory in this repository. Once you’ve finished building your component above, you should add an HTML example for each variant of your component to the showcase website.

To begin working on the website, you need to copy the compiled CSS/JS file from the framework into the `/docs` directory and start a Jekyll server that watches for changes in template files.

You can do this by running the following command from the root directory:

```bash
npm run start-docs
```

All component variant examples are located in the `/docs/_components/` directory in this repository.

Here is an example of what a component template file should look like:

```html
---
title: "Burst"
description:
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, accusamus, minima. Sit, iure ipsum dolor, debitis aliquam facilis iste excepturi ullam doloribus odio suscipit necessitatibus aut, in dolores quas similique.</p>
type: dot navigation
author: David Gierman
category: evolution
order: 1
---

<nav class="evo_dot-navigation evo_dot-navigation-burst">
  <ul>
    <li class="evo_dot-current"></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</nav>
```

The [YML](https://jekyllrb.com/docs/frontmatter/) at the top of the file is used to describe the component and make sure it appears in the right place on the page.

- `title`: the name of the component **variant** (for example, if your component was a button, you might have "Default", "Hover State", and "Pill-Shaped" variants.)
- `description`: a short description of the variant. Try to keep it less than a few paragraphs. You can use basic HTML here.
- `type`: the name of the component. This should be the same value for each variant of the component, so that they are all grouped in the right section on the webpage.
- `author`: the author of the component.
- `category`: this is either `standard` or `evolution`.
- `order`: use this to control the order in which each variant appears in a component’s section on the webpage.

## Additional resources

- [Evolution UI README][readme]
- [Showcase Website README][readme]
- [Code styleguide][styleguide]
- [Color palette][color-palette]
- [Access color palette with the `get-color` Sass function][color-palette-get-color]

## Quick recap

- Each complex *part* in the Evolution UI framework must be represented as a **component**.
- The `.css` , `.css.map` and others output files must not be tracked.
- After you started the development environment with the command `npm start`, your default browser will show up and your component will be visible at the following URL: `http://localhost:3000/temp/[evolution|standard]/component-name.html`
- ES6: You can only have one default export per file.
- Evolution UI makes use of `autoprefixer`, so **you don't need to add vendor prefixes** to your CSS rules.
- Don't forget to add your component’s HTML markup to the showcase website.
- The target branch for each pull request is the `development` branch.
- *npm* sometimes has problems with module dependencies. When you see error messages like `Module not found: Can't resolve ...` or `Cannot find module ...`, run `npm update` in your command line.

[bov-academy]: https://bovacademy.com
[color-palette]: http://codepen.io/DrLeleMeo/full/oZdMQa/
[color-palette-get-color]:http://www.sassmeister.com/gist/d384a2c6746a3c4045b49512e6795aa6
[contributions]: .github/CONTRIBUTING.md
[gitflow]: https://www.atlassian.com/git/tutorials/comparing-workflows#gitflow-workflow
[github-pages]: https://pages.github.com/
[jekyll]: https://jekyllrb.com
[jekyll-windows]: http://jekyllrb.com/docs/windows/#installation
[license]: LICENSE.md
[liquid]: http://liquidmarkup.org
[node]: https://nodejs.org/en/
[node-install]: https://docs.npmjs.com/getting-started/installing-node
[npm]: https://www.npmjs.com
[pull-request]: https://help.github.com/articles/creating-a-pull-request-from-a-fork/
[readme]: ../README.md
[readme-required]: ../README.md#requirements
[repo]: https://github.com/BovAcademy-opensource/evolution-ui
[ruby]: https://www.ruby-lang.org/en/
[rubybundler]: http://bundler.io
[rubygems]: https://rubygems.org
[sass]: http://sass-lang.com
[showcase-readme]: ../docs/README.md
[showcase-website]: https://BovAcademy-opensource.github.io/evolution-ui/
[styleguide]: ../CODE_GUIDE.md
