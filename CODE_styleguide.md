This guidelines are in part based on the code guide you can find at this URL:  http://codeguide.co/

#### Table of contents

* [Editor preferences](#editor-preferences)
   * [HTML Code guide](#html-code-guide)
       * [HTML Syntax](#html-syntax)
       * [Attribute order](#attribute-order)
       * [HTML tabindex Attribute](#htmltabindexattribute)
   * [CSS Code Guide](#css-code-guide)
       * [Declaration order](#declaration-order)
       * [Media queries](#media-queries)
       * [Single declarations](#single-declarations)
       * [Shorthand notation](#shorthand-notation)
   * [BEM: BLock, Element, MOdifier](#bem-block-element-modifier)
       * [Namespaces](#namespaces)
       * [JS hooks](#js-hooks)
       * [State Hooks](#state-hooks)
       * [BEM and BEMit in the evolution framework](#bem-and-bemit-in-the-evolution-framework)
         * [Usage examples and SASS documentation](#usage-examples-and-sass-documentation)
   * [IMPORTANT NOTES](#important-notes)
      * [Sass structure](#sass-structure)
   * [Javascript guideline](#javascript-guideline)





### Editor preferences



EditorConfig helps developers define and maintain consistent coding styles between different editors and IDEs

Some Editors come bundled with support for this tool, some others need to install a plugin.

Please check on the [site project](http://editorconfig.org/#download) how to configure the editor of your choice..

Then use the [.editorconfig](https://github.com/BovAcademy-opensource/evolution-ui/.editorconfig) file contained in the root of the framework repository


    root = true

    [*]
    indent_style = space
    end_of_line = lf
    charset = utf-8
    trim_trailing_whitespace = true
    insert_final_newline = true
    
    # Use 2 spaces for indentation in HTML, JavaScript, SCSS, CSS
    [*.{html,js,scss, css}]
    indent_size = 2
    
    [*.js]
    indent_brace_style = 1TBS
    continuation_indent_size = 2
    curly_bracket_next_line = true
    space_after_anonymous_functions = true
    space_after_control_statements = true
    spaces_around_operators = true
    spaces_in_brackets = false
    quote_type = single
    
    # Use 4 spaces for indentation in Markdown files
    
    [*.md]
    indent_size = 4



As a rule of thumb, we follow the following basic rule:

- Use soft-tabs set to 2 spaces.
- Trim trailing white space on save.
- Set encoding to UTF-8.
- Add new line at end of files.


# HTML Code guide

### HTML Syntax

* Use soft tabs with 2 spaces (Sublime Text: https://css-tricks.com/changing-spaces-tabs-sublime-text/)
* Nested elements should be indented with 2 spaces
* Always use double quotes on attributes
* Do not omit optional closing tags

### Attribute order

HTML attributes should come in this particular order (more readable):

- `class`
- `id`, `name`
- `data-*`
- `src`, `for`, `type`, `href`, `value`
- `title`, `alt`
- `role`, `aria-*`

Example

````html
<div class="className">
  <h1 class="heading" id="heading">Title 1</h1>
  <a class="link" id="link1" data-value="1" title="First link" href="#">Link 1</a>
</div>
````



### HTML tabindex Attribute

For accessibility, use the correct `tabindex` on each focusable element.

# CSS Code Guide

- Use soft tabs with 2 spaces
- Use one space before the opening brace of declaration blocks for legibility.
- Place closing braces of declaration blocks always on a new line.
- Include one space after the colon operator `:` for each declaration.
- Each declaration should appear on its own line for more accurate error reporting.
- End all declarations with a semi-colon; even on the last one.  The code is more error prone without it.
- Do not prefix property values or color parameters with a leading zero (e.g., `.9` instead of `0.9`).
- When possible, use shorthand hex values where available, e.g., `#fff` instead of `#ffffff`.
- Quote attribute values in selectors, e.g., `input[type="submit"]`
- Do not use units for zero values, e.g., `top: 0;` instead of `top: 0px;`.



### Declaration order

Related property declarations should be grouped together following the order:

1. Positioning
2. Box model
3. Typographic
4. Visual Aspect

for example:

```css
.myComponent {
  /* positioning */
  position: relative;
  top: 0;
  left: 0;
  
  /* Box-model */
  display: block;
  min-height: 0;
  height: 0;
  padding-left: 10px;
  padding-right: 10px;
  
  /* Typography */
  font-size: 2rem;
  color: #ababab;
  
  /* Visual Aspect */  
  background-color: rgb(0,0,0);
  border-width: 1px;
  border-color: #000;
  border-style: groove;
  perspective: 40px;
  
  /* Misc */
  transition: min-height 1s cubic-bezier(0,1.02,0,1);
  cursor: initial;
  overflow: hidden;
}
```



### Media queries

Place media queries as close to their relevant rule sets whenever possible. Don't bundle them all in a separate stylesheet or at the end of the document.

### Single declarations

When a rule set requires *only one declaration*, remove line breaks for readability.

```css
/* Single declarations on a single line */
.line1 { height: 10px; }
.line2 { height: 20px; }
.line3 { height: 30px; }

/* Multiple declarations, one per line */
.myComponent {
  /* positioning */
  position: relative;
  top: 0;
  left: 0;  
  /* Box-model */
  display: block;
  min-height: 0;
  height: 0;
  padding-left: 10px;
  padding-right: 10px;
}
```



### Shorthand notation

**When possible, prefer the long declaration over the shorthand version.**

```
/* Bad example */
.element {
  padding: 0 0 20px;
  border-radius: 1px 1px 0 0;
}

/* Good example */
.element {
  padding-bottom: 20px;
  border-top-left-radius: 1px;
  border-top-right-radius: 1px;
}
```



## BEM: BLock, Element, MOdifier

BEM and its variation BEMit are two methodologies that give us the capacity to improve maintainability as well as readability of our code. 

To get more confidence with them, take a look at the [getbem](http://getbem.com/) website.

BEMit improves the semantic meaning through the use of *namespaces*. More about BEMit [here](https://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/)

The following table shows common elements and their meanings

| TYPE             | PREFIX       | MIXIN name used in evolution | EXAMPLES                  |
| ---------------- | ------------ | ---------------------------- | ------------------------- |
| Component        | `c-`         | `c`                          | `c-card` `c-checklist`    |
| Layout module    | `l-`         | `l`                          | `l-grid` `l-container`    |
| Helper           | `h-`         | `c`                          | `h-show` `h-hide`         |
| Object           | `o-`         | `o`                          | `o-media`                 |
| States           | `is-` `has-` | `s`                          | `is-visible` `has-loaded` |
| JavaScript hooks | `js-`        |                              | `js-tab-switcher`         |

### Namespaces

A namespace could be use for:

- Classes
- Settings
- Mixins
- Functions

More info on how to use namespaces and their intrinsic meanings can be found [here](https://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/)

Examples:

- `l-`: **Layout Modules**

  *Examples:*

  - `.l-grid`
  - `$l-grid-gutter`

- `c-`: **Components**

  - `.c-card`
  - `$c-card-width`


- `h-`: **Helpers**

  *Examples:*

  - `.h-text--bold`
  - `$h-text-bold-weight`

- `t-`: [Themes](http://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/#theme-namespaces-t-)

  *Examples:*

  - `.t-default`
  - `$t-default-color`

Others:

- `js-` JS Hooks

- `is-`/`has-` State Hooks

  ​

### JS hooks

As a rule of thumb, combining the visual aspect (CSS) and the behavior (JS) onto the same class in your HTML is not wise. This is because doing so you run the risk of breaking your application since  you can’t have (or remove) one without (removing) the other. It is smarter, cleaner, and more maintainable to bind your JS onto specific classes like in the following examples:

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



The following are good examples of state hooks:

- `is-active`
- `has-loaded`
- `is-loading`
- `is-visible`
- `is-disabled`
- `is-expanded`
- `is-collapsed`



### BEM and BEMit in the evolution framework

As a rule of thumb all *components* classes must be prefixed with the framework `evo` prefix.

Using the provided *mixins* you can create *namespaced* classes without the need of specifying the prefix.

The previous example becomes:

```scss
<!-- this is an evo component -->
<div class="evo_c-searchBox">

  <!-- the searchBox component contains an input element -->
  <!-- 
	  the input element comes with two modifiers - big and red 
  -->
  <input class="evo_c-searchBox__input evo_c-searchBox__input--big" type="text">
  <input class="evo_c-searchBox__input evo_c-searchBox__input--red" type="text">

</div>
```



### Usage examples and SASS documentation

To get more confidence with the current mixins provided by our framework, take a look at these [usage example](http://www.sassmeister.com/gist/9efa03e3a6d7fee563d5b51ef2742cbf) and have a look at our sassDoc documentation. To do that, just open up your favourite browser and navigate to the `assets/sassdoc/` folder contained within the `development`branch

# IMPORTANT NOTES

Each component in our framework must be prefixed with the framework name.

Look at the following example:

The `.evo_c-grid__col` selector contains the `evo` prefix but it's hardcoded and this is a bad way to do that.

```scss
@include c('gridrow', false){
  @include e('gutters'){
    margin: -1em 0 1em -1em;
    > .evo_c-grid__col {
      padding: 1em 0 0 1em;;
    }
  }
}
```

When you need to create a classe for a component without the use of a provided mixin, remember to prefix it with the `$framework-name` variable like in the following snippet of code:

```scss
@include c('gridrow', false){
  @include e('gutters'){
    margin: -1em 0 1em -1em;
    > .#{$framework-name}_c-grid__col {
      padding: 1em 0 0 1em;;
    }
  }
}
```



Config variables in your configuration file must be always prefixed by the [ BEMit namespace + the component's name ]. If your component is called for example `Ruler`, a well structured config file could be:

```
//----------------------------------------------------------------
//                       RULER Component config
//----------------------------------------------------------------

$c-ruler_width: 200px;
$c-ruler_font-size: 200px;
```



## Sass structure

For structuring SASS files we've adopted a customized version of the [7-1 pattern](https://sass-guidelin.es/#architecture)

This is the intended structure for our SASS files:



```
stylesheets/
|
|– abstracts/
|      |- mixins/
|      |    | -  _mixinA.scss
|      |    | -  _mixinB.scss
|
|   |– _variables.scss    	# Sass Variables
|   |– _functions.scss    	# Sass Functions
|   |– _placeholders.scss 	# Sass Placeholders
|   |– __import-mixins.scss # Import SASS mixins
|
|– base/
|   |– _reset.scss        # Reset/normalize
|   |– _typography.scss   # Typography rules
|   …                     # Etc.
|
| - components/
|      |- accordion     # Accordion's assets
|      |    | -  _accordion-config.scss
|      |    | -  _accordion.scss
|      |    | -  ...
|      |
|      |- animations     # Animations' assets
|      |    | -  _animations-config.scss
|      |    | -  _animations.scss
|      |    | -  ...
|      |
|      |- audio         # Audio's assets
|      |    | -  _audio-config.scss
|      |    | -  _audio.scss
|      |    | -  ...
|      |
|      | ... etc
|
|– layout/
|   |– _navigation.scss   # Navigation
|   |– _grid.scss         # Grid system
|   |– _header.scss       # Header
|   |– _footer.scss       # Footer
|   |– _sidebar.scss      # Sidebar
|   |– _forms.scss        # Forms
|   …                     # Etc.
|
|– pages/
|   |– _home.scss         # Home specific styles
|   |– _contact.scss      # Contact specific styles
|   …                     # Etc.
|
|– themes/
|   |– _theme.scss        # Default theme
|   |– _admin.scss        # Admin theme
|   …                     # Etc.
|
|– vendors/
|   |– _reset.scss    	  # Reset
|   |– _normalize.scss    # Normalize
|   |– _jquery-ui.scss    # jQuery UI
|   …                     # Etc.
|
`– main.scss              # Main Sass file
```



Where:

- The `abstracts` folder holds all Sass tools and helpers used across the project (*mixins*, *functions*, **application-wide (a.k.a globals)** *variables*, and *placeholders*). In particular, *mixin* are placed into the `mixins` sub-folder and imported through the `_import-mixins.scss` file.

- The `base` folder holds the boilerplate code for the project (reset, typography, etc.). 

- The `layout` folder contains everything that takes part in laying out the site (header, grid, footer, aside, etc.).

- As its name suggests, the `components`  folder contains all the components. Components are distributed into two main categories,  `evolution`  or  `standard`, and each one has its own directory. Inside the component directory are your main sass files. For example, the Dot Navigation component has these two files: main file `_Eyelids.scss` and configuration file `_Eyelids-config.scss`. You can import configuration file into the main file to keep the configuration separate. 

  **IMPORTANT NOTE:** Config variables must be always prefixed by the actual component's name. If your component is called for example `Ruler`, a well structured config file could be:

  ​

  ```scss
  //----------------------------------------------------------------
  //                       RULER Component config
  //----------------------------------------------------------------

  $c-ruler_width: 200px;
  $c-ruler_font-size: 200px;

  ```

  ​

  The file `_import-components.scss` is gathering all of the main sass files from all of the components. The `main.scss` file at the root of the `stylesheets` directory is collecting all of the scss files from subdirectories and this is the file that is compiled into `main.css` and saved into `production` root directory.

  Each component is imported through the `_import-components.scss` file.

- The `pages` folder contains page-specific styles. it could be the right place for placing specific styles for the home page for example.

- The `themes` folder contains different themes for the application.

- The `vendor`folder contains all the CSS files from external libraries and frameworks – for example: Reset, Normalize, etc.




# Javascript guideline

For Javascript, we adhere almost totally to the rules proposed by the [Modern Developer's guideline](https://github.com/GabrieleRomeo/Modern-Developer-JavaScript-Style-Guide) with the exception of *allowing spaces in brackets*.

