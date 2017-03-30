## Evolution UI - How to contribute



* [Naming Conventions](#naming-conventions)

     [Namespace](#namespace)

     * [JS hooks](#js-hooks)
     * [State Hooks](#state-hooks)
     * [Configuration](#configuration)
     * [Build a component for Evolution UI](#build-a-component-for-evolution-ui)
         * [Setting up a working environment](#setting-up-a-working-environment)
         * [Understanding the framework structure](#understanding-the-framework-structure)
            * [ES6 Module](#es6-module)
         * [Setting up the HTML markup and SASS](#setting-up-the-html-markup-and-sass)
         * [Import Stylesheets and app.js](#import-stylesheets-and-app.js)
         * [Sassdoc](#sassdoc)
         * [Let's code with SASS](#lets-code-with-sass)
         * [Pushing the resulting component on the repository](#pushing-the-resulting-component-on-the-repository)
     * [Additional information](#Additional-information)



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

  - `.evo_l-grid` // With the prefix
  - `.l-grid`        // Without the prefix
  - `$l-grid-gutter`

- `c-`: **Components**

  - `.evo_c-card`
  - `$c-card-height`


- `h-`: **Helpers**

  *Examples:*

  - `.h-text--bold`
  - `.evo_h-text—bold`
  - `$h-text-bold-weight`

- `t-`: [Themes](http://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/#theme-namespaces-t-)

  *Examples:*

  - `.evo_t-default`
  - `.t-default`
  - `$t-default-color`

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

The component's name is not mandatory but it is **highly recommended** since that it could come to the rescue with references later on.



### Build a component for Evolution UI

This tutorial will give you the fundamentals on how to build a new **evolution** component for Evolution UI.

Let's imagine that we want to build a new component called `super-easy`.



#### Setting up a working environment



The first step for contributing with a new component is to clone the Evolution UI framework on your machine.

To do this, go to the official repository which can be found at [https://github.com/BovAcademy-opensource/evolution-ui](https://github.com/BovAcademy-opensource/evolution-ui) and clone it:

```shell
~ $ git clone https://github.com/BovAcademy-opensource/evolution-ui.git
```

Then, clone the  `development` upstream branch, by checking out onto it:

```shell
~ $ git checkout development
```

As explained in the [README.md](https://github.com/BovAcademy-opensource/evolution-ui/tree/development) file, we use [Gitflow](https://www.atlassian.com/git/tutorials/comparing-workflows#gitflow-workflow) as official workflow. **Each new component** must be developed on a new, isolated, branch. In Gitflow this particular branch is commonly known as *feature branch*.

Following that rule, we create a separate branch and instead of basing it on `master`, we base it [on `development`](https://www.atlassian.com/git/tutorials/using-branches/git-checkout):

```shell
~ $ git checkout -b c-super-easy development
```

Please, note the use of the `c-` prefix before the actual component's name. 



**Remember to rebase often to stay updated and minimize conflicts**:

```shell
~ $ git pull --rebase evolution development
```



Now we are ready to work at our component by staging and committing our changes on the new dedicated branch.

#### Understanding the framework structure

In Evolution UI we tried to define an easy and well-separate structure. To this end, each component is placed in a separate subfolder.

The main path for components is `evolution-ui/assets/` 

Components are distributed into two main categories , `evolution` or `standard`, and based on its type, each one has its own directory:

* HTML path:
  *  `evolution-ui/assets/html/[evolution|standard]/component-name.html`
* Javascript path:
  *  `evolution-ui/assets/scripts/[evolution|standard]/component-name.js`
* SASS path:
  *   `evolution-ui/assets/stylesheets/[evolution|standard]/_component-name.scss`



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
  -  `evolution-ui/assets/html/evolution/eyelids.html`
- Javascript path:
  -  `evolution-ui/assets/scripts/evolution/eyelids.js`
- SASS path:
  -   `evolution-ui/assets/stylesheets/evolution/_eyelids.scss`
  -   `evolution-ui/assets/stylesheets/evolution/_eyelids-config.scss`

Looking at the SASS dir, we can see that the Eyelids component has two main files: `_Eyelids.scss` and a configuration file called `_Eyelids-config.scss`. You can import configuration files into the main file to keep the configuration separate.

Each SASS component is imported through the `_import-components.scss` file.

##### ES6 Module

Evolution UI makes use of ES6 modules to handle components' dependencies.

Within your `component-name.js` file make use of the ES6's `export` directive to export it globally.

```javascript
export default function() {

/* The Javascript content for your component   */

  /* [ ... ] */

}
```

Then, you can import and execute your component's script through the `app.js` file:

```javascript
// The component-name is the name of your script without the extension
import c-component-name from './[standard|evolution]/component-name'

// execute it
c-component-name();
```



#### Setting up the HTML markup and SASS

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



#### Import Stylesheets and app.js

In your `component-name.html` file (which will be located at `evolution-ui/assets/html/[evolution|standard]/component-name.html`), you need to import all the necessary assets.

Import stylesheets:

```html
<!-- Import Material Icons and Roboto Fonts -->
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Roboto+Slab|Roboto:300,400,700" rel="stylesheet">

<!-- import main.css ->
<link href="../../styles/main.css" rel="stylesheet">
```

Then, at the end of your html file, import the app.js file:

```html
<script type="text/javascript" src="../../scripts/app.js"></script>
```



Okay, we are ready for SASS but before coding, let's take a look at predefined mixins and functions provided by the framework.

#### Sassdoc

Evolution UI contains a list predefined *mixins* and *functions* which speed up your development process and give you the capability of being operative in a moment.

To see them, type in your favorite shell or command line the following command:

```shell
~ $ npm run sassdoc
```

This will open up your predefined browser and show you the Evolution UI documentation for Sass.

#### Let's code with SASS

Having defined the HTML markup, let's see how to implement each class using the provided tools.

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
// Path: evolution-ui/assets/stylesheets/evolution/_super-easy-config.scss

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
// Path: evolution-ui/assets/stylesheets/evolution/_super-easy.scss

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

Now, if the component's name will change, our component will work without any problem.



#### Pushing the resulting component on the repository

As a rule of thumb, each component must be reviewed before getting into the framework.

When you are ready to push your work on the repository, just do it on the remote with the following command:

```shell
~ $ git push origin c-super-easy
```

At this point, you're ready for open a new [pull request](https://help.github.com/articles/creating-a-pull-request/) and your component is ready for a review by the Evolution UI core team.



### Additional information

Code style guide [here](https://github.com/BovAcademy-opensource/evolution-ui/blob/development/CODE_styleguide.md)

README [here](https://github.com/BovAcademy-opensource/evolution-ui/blob/development/README.md)



