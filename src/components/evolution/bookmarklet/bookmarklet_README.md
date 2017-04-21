# Using Bookmarklet
To use bookmarklet, highlight some text. If the text is able to be bookmarked a small dialogue will pop up, giving you the option to bookmark or not. Users can also use the keyboard shortcut `Shift+Control+L+M`. Currently you can only bookmark text that is inside of a single HTML tag. In other words you may not select text that belongs to two different paragraphs or splits any other node like a span or header. The component will warn you if you split nodes or try and activate the bookmark without selecting any text.

Once a bookmark has been created it will show up in the small widget on the right-hand side of the screen. Each bookmark can be clicked on to quickly navigate the page to that place in the text. In addition there is a convenient "Google this bookmark" link for each list item which will initiate a Google search with the query pre-filled by the bookmark text. You may clear individual bookmarks by clicking on the close icon, or clear all current bookmarks by clicking the "Clear all" button at the bottom of the bookmark list.

# Including Bookmarklet
To include Bookmarklet on a page simply add the following markup somewhere in the body tag of your page and include bookmarklet.js before the closing body tag.

```HTML
<!-- bookmark list -->
<div class="evo_c-bookmarklet" data-highlight-color="">
 	<i class="material-icons evo_c-bookmarklet__teaser">bookmark</i>
  	<h1>Bookmarks</h1>
  	<ol class="evo_c-bookmaklet__bookmark-list"></ol>
  	<a class="evo_c-btn evo_c-btn--secondary evo_c-bookmarklet__clear-all">clear all</a>
</div>

<!-- pop-up -->
<div class="evo_c-bookmarklet__pop-up">
  	<p>Bookmark this selection?</p>
  	<span class="evo_c-bookmarklet__pop-up-button--yes"><i class="material-icons">done</i> Yes!</span>
  	<span class="evo_c-bookmarklet__pop-up-button--no"><i class="material-icons">close</i> No.</span>
  	<span class="evo_c-bookmarklet__pop-up-pip"></span>
</div>
```

### Highlight color

If you don't like the default yellow, a custom highlight color can be specified by adding a valid named color or hex color value to the data-highlight-color attribute. For example:

```HTML
<!-- with hex color -->
<div class="c-bookmarklet" data-highlight-color="#ff00ff"></div>

<!-- with named color -->
<div class="c-bookmarklet" data-highlight-color="deeppink"></div>
```

### Limiting the component's scope

You can limit the scope of bookmarklet's highlighting and bookmark creation by adding the `data-limit-bookmarklet` attribute to any element and the bookmarking will only be active for that element and its descendants. In the example below the `section` tag and its child elements will be bookmark-able but anything outside of the section tag will not.

```HTML
<section class="article" data-limit-bookmarklet>
    <!-- section content -->
</section>
```

