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
    - [Run your component in the browser](#run-your-component-in-the-browser)
        - [ES6 Module](#es6-module)
        - [Writing safe JavaScript code](#writing-safe-javascript-code)
    - [Setting up the HTML markup and SASS](#setting-up-the-html-markup-and-sass)
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

The main path for components is `evolution-ui/source/components`

Components are distributed into two main categories , `evolution` or `standard`, and based on its type, each one has its own directory:

- HTML path:
  - `evolution-ui/assets/html/[evolution|standard]/default.html`
- Javascript path:
  - `evolution-ui/assets/scripts/[evolution|standard]/index.js`
- SASS path:
  - `evolution-ui/assets/stylesheets/[evolution|standard]/component_name/index.scss`

```
    - evolution-ui/
    |
    |
    |
    |----source/
    |    |
    |    |
    |    |
    |    |----components/
    |    |    |
    |    |    |
    |    |    |
    |    |    |----evolution/
    |    |    |    |
    |    |    |    |
    |    |    |    |----[component-name]/
    |    |    |         |
    |    |    |         |
    |    |    |         |
    |    |    |         |----default.html
    |    |    |         |----index.scss
    |    |    |         |----index.js
    |    |    |
    |    |    |
    |    |    |
    |    |    |----standard/
    |    |         |
    |    |         |
    |    |         |
    |    |         |----[component-name]/
    |    |              |
    |    |              |
    |    |              |
    |    |              |----default.html
    |    |              |----index.scss
    |    |              |----index.js
    
   
```

For example, the Eyelids component is an **evolution** component and it's main files are:

- HTML:
  - `evolution-ui/source/components/evolution/eyelids/default.html` - (known as *preview file*)
- JavaScript path:
  - `evolution-ui/source/components/evolution/eyelids/index.js`
- SASS path:
  - `evolution-ui/source/components/evolution/eyelids/index.scss`

Each SASS component is imported through the `evolution-ui/source/assets/styles/main.scss` file.

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

| TYPE             | PREFIX | Evolution UI - Mixin Name | EXAMPLES                       |
| ---------------- | ------ | :-----------------------: | ------------------------------ |
| Component        | `c-`   |        `component`        | `evo_c-card` `evo_c-checklist` |
| Layout module    | `l-`   |         `layout`          | `l-grid` `l-container`         |
| Helper           | `h-`   |         `h`elper          | `h-show` `h-hide`              |
| Object           | `o-`   |         `object`          | `o-media`                      |
| States           | `is-`  |          `state`          | `is-visible`                   |
| JavaScript hooks | `js-`  |                           | `js-tab-switcher`              |

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

- \@-: Suffix

  - `.evo_c-card\@print`

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

### Run your component in the browser

Evolution UI makes use of Gulp for tasks execution.

To get more information on that, please read the **Installing Gulp tasks** in the [README.md](https://github.com/BovAcademy-opensource/evolution-ui/tree/development) file.

After you started the development environment with the command `npm start`, your default browser will show up and the *preview file* will be visible at the following URL:

`http://localhost:3000/[evolution|standard]/component-name/default.html`

**IMPORTANT NOTE**: *npm* sometimes has problems with module dependencies. When you see error messages like `Module not found: Can't resolve ...` or `Cannot find module ...`, run `npm update` in your command line.

#### ES6 Module

Evolution UI makes use of ES6 modules to handle components' dependencies. Our goal is to build a dependency tree from our main `index.js` file located under the `/source/assets/scripts` path.

- The most simple case is having a single default export. Within your `/source/assets/components/[evolution|standard]/component-name/index.js` file make use of the ES6's `export default` directive to export it globally. Then, you can import and execute your component's script through the `index.js` file. **You can only have one default export per file**:

  ```javascript
  //
  // Path: source/assets/components/[evolution|standard]/component-name/index.js
  // Content of your component

  export default function() {

  /* Your Javascript goes here   */

    /* [ ... ] */

  }

  // Import your component
  // Path:  source/assets/scripts/index.js

  import component-name from '../../components/[standard|evolution]/component-name'

  // execute it
  component-name();
  ```

- You can find all you need to know on ES6 modules [here](http://2ality.com/2014/09/es6-modules-final.html).


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

* [BEM & BEMit naming conventions through mixins](https://www.sassmeister.com/gist/45911053b3045e90805741bfa2875c30)

* [Background & Text color variants](http://www.sassmeister.com/gist/08edd5072f77749bebca0081201de9a8)

* [Evolution UI - color palette](http://www.sassmeister.com/gist/d384a2c6746a3c4045b49512e6795aa6)

For a complete list of these utilities, take a look at the internal sassdoc. Type in your shell the command: `npm run sassdoc`

---------------------------

SASS files must be placed within the `component-name` dir:

```
evolution-ui/
    |
    |- source/
          |
          | [ ... ]
          |
          | - components/
                   |
		   |- [evolution|standard]/
                              |
                   	      | - [component_1]
			      | - [component_2]
                   	      | - super-easy   # All of the component's assets go here
                   	               |
                   	               | -  _index.scss
				       | -   index.js
				       | -   default.html
				       | -   variant_2.html
				       | -   variant_3.html
    
    
    Path: evolution-ui/source/components/[evolution|standard]/[component-name]/
    
```



At this point, we need to import the new component into the SASS system (if it's not already present). To do this, we need to open the `_main.scss` file, and based on the component's type, we add a specific entry at the end of of the list  [`evolution` or `standard` ].

``` scss
// Path: evolution-ui/source/assets/styles/main.scss
//
// -----------------------------------------------------------------------------
//                              COMPONENTS FOLDER
// -----------------------------------------------------------------------------
//
//  It contains all kind of specific modules
//

//
// List of EVOLUTION components
//
// [...]
//
// Append your 'evolution' component here
@import '../../components/evolution/component-name/index';

//
// List of STANDARD components
//
// [...]
//
// Append your 'standard' component here
@import '../../components/standard/component-name/index';
```

Then, we are ready to take care of our component.



The following table shows the currently available core BEM mixins:



|               Mixin Syntax               |               Description                | Context                                  |
| :--------------------------------------: | :--------------------------------------: | ---------------------------------------- |
|    `block($name, $type: 'component')`    |           generate a BEM block           | It can be defined in the global scope and not within elements or modifiers |
|             `element($name)`             |          generate a BEM element          | It can be defined within block items     |
|            `modifier($name)`             |          generate BEM modifier           | It can be defined within blocks or elements |
|            `component($name)`            |         generate a BEM component         | As the block item                        |
|             `object($name)`              |          generate a BEM object           | As the block item                        |
|             `layout($name)`              |          generate a BEM layout           | As the block item                        |
| `helper($name, $double-class: false, $use-framework-prefix: false)` |          generate a BEM helper           | By default it can be fined in the global scope. If you set the $double-class selector to true, it can be defined within blocks, modifiers, elements. |
|              `theme($name)`              |           generate a BEM theme           | It can be defined                        |
|              `state($name)`              |           generate a BEM state           | It can be defined everywhere but not in a theme |
|             `suffix($name)`              |          generate a BEM suffix           | It can be defined everywhere             |
|         `define-dry($name-null)`         | generate a dry - don't repeat yourself - block | It can be defined within blocks, elements, modifiers |

More info about the previous mixins can be found in the SASSdoc.

Let's move to the `index.scss` SCSS file:

```scss
// Path: evolution-ui/source/components/evolution/super-easy/_index.scss

//----------------------------------------------------------------
//                 Super-Easy Component config file
//----------------------------------------------------------------

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

//----------------------------------------------------------------
//                       Super-Easy file
//----------------------------------------------------------------

// This will be rendered to .evo_c-super-easy
@include component( 'super-easy' ) {

  width: $c-super-easy-width;
  font-size: $c-super-easy-font-size;
  background-color: $c-super-easy-background-color;

    // This define a helper class
    // Since we've provided the $double-class argument, It represents 
  	// a double class helper selector like class1.class2
    // It will be rendered into .evo_c-super-easy.h-txt
    @include helper( 'txt', $double-class: true ) {
		
    }

    // This will be rendered into .evo_c-super-easy__header
    // The 'header' element
    @include element( 'header' ) {
      height: $c-super-easy-header-height;
      
      	// This define a modifier
        // It will be rendered into .evo_c-super-easy__header--half
      	@include modifier( 'half' ) {
          width: 50%;
      	}
    }

    // This will be rendered into .evo_c-super-easy__body
    // The 'header' element
    @include element( 'body' ) {
      height: $c-super-easy-body-height;
    }

    // This will be rendered into .evo_c-super-easy__footer
    // The 'footer' element
    @include element( 'footer' ) {
      height: $c-super-easy-footer-height;
    }

    // This will be rendered into .evo_c-super-easy__title
    // The 'title' element
    @include element( 'title' ) {
      color: get-color('accent', $opacity: .6);
    }

    // This will be rendered into .evo_c-super-easy__paragraph
    // The 'paragraph' element
    @include element( 'paragraph' ) {
      font-size: 1.1rem;
    }

    // This will be rendered into .evo_c-super-easy__button
    // The 'button' element
    @include element( 'button' ) {
      border: 2px solid $c-super-easy-button-border-color;
    }

    // This will be rendered into .evo_c-super-easy__copy
    // The 'copy' element
    @include element( 'copy' ) {
      font-family: $c-super-easy-copy-font-family;
      font-size: .8rem;
    }
}
```



At the beginning of the `main.scss` file we used the `get-color` function to extract one of the available colors in Evolution UI. The complete color palette of Evolution UI can be found in the SassDoc or at the following [url](color-palette). Using the predefined get-color function, you can extract a desired color and its variants with ease. There exist also two mixins ( backgroundVariants and textVariants ) that can be used for generating color variations for backgrounds a texts (usage examples and more information in our SassDoc).

#### Make use of comments for improve readability

To make your `.scss` maintainable and well structured, you can exploit *single line comments* to add meanings and improve readability. In SASS, *single line comments* start with `//` and are removed by the  `.scss` pre-processor, so they won't appear in your .css file.

Let's see at an example:

```scss
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //                             HEADER ELEMENT
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  @include element( 'header' ) {

  }

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //                             BODY ELEMENT
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  @include element( 'body' ) {

  }

  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //                             FOOTER ELEMENT
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  @include element( 'footer' ) {

  }
```

And you could use a slightly different version of comment for modifiers, too:

```scss
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //                             HEADER ELEMENT
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  @include element( 'header' ) {

    width: 80%;
    height: 200px;


    //--------------------------------------------------------------------------
    //                         LOW -- HEADER MODIFIER
    //--------------------------------------------------------------------------

    @include modifier( 'low') {
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
// This will be rendered into .evo_c-super-easy__paragraph

@include component( 'super-easy' ) {

  @include element( 'paragraph' ) {
    font-size: 1.1rem;

    & + .evo_c-super-easy__button {
       padding-left: 40px;
    }
  }
  
  @include element( 'button' ) {
    
  }
}
```

In the previous snippet of code, within the *paragraph* element we try to reference
the *button* element which is defined somewhere else in the file but not in the same `@include` directive.

Here is where the `get-bem-selector` function comes to the rescue. 

The `get-bem-selector` function is context aware which means that you don't need to specify
the parent block container. Its syntax is:

```scss
function get-bem-selector($element: null, $modifier: null, $suffix: null)
```



Instead of writing an hard-coded selector by hand, this function provides you the right selector with ease:

```scss
// This will be rendered into .evo_c-super-easy__paragraph

@include component( 'super-easy' ) {
  
  $button-selector: get-bem-selector('button');

  @include element( 'paragraph' ) {

    font-size: 1.1rem;

    & + .#{$button-selector} {
       padding-left: 40px;
    }
  }
  
  @include element( 'button' ) {
    
  }

}
```

Which is much better!



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

-----------------------------------------------------------------

Your component is now ready for a review by the Evolution UI core team.

## Add a component to the showcase website

The showcase website is where we display component demos and markup to the public. It is built using [Jekyll](https://jekyllrb.com), a powerful and simple static site generation tool written in [Ruby](https://www.ruby-lang.org/en/).

The code for the showcase website is located in the `/docs` directory in this repository. Once you’ve finished building your component above, you should add an HTML example for each variant of your component to the showcase website.

To begin working on the website, you need to copy the compiled CSS/JS file and start a Jekyll server that watches for changes in template files.

You can do this by running the following command from the root directory:

```bash
npm run docs
```

All component variant examples are located in the `source/assets/components/[evolution|standard]/component-name/` directory in this repository.

Each variant is defined within a different HTML file. For example:

* `default.html` - this file is the main version of your component
* `color-variations.html` - this file contains all of the component's color variations
* `full-width.html`- this file contains the full-width variation

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

**Please note the identation of two spaces before the HTML markup**

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
- After you started the *development environment* with the command `npm start`, your default browser will show up and your component will be visible at the following URL: `http://localhost:3000/[evolution|standard]/component-name/default.html`
- To preview your component on the showcase website run the command `npm run docs`
- ES6: You can only have one default export per file.
- Evolution UI makes use of `autoprefixer`, so **you don't need to add vendor prefixes** to your CSS rules.
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
