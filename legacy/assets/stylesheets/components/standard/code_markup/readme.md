## Code Markup

The Code Markup component is a standard tabs UI that can be used to display HTML, CSS and JavaScript code or really any piece of content that would come in a triad.  The entire component is wrapped in a `<div>` with a class of `.evo_c-markup`.  For the tab titles and styling, we use an `<ul>` with a class of `.evo_c-markup__tabs`.  To separate out the JavaScript functionality, there is also a class of `.js-c-markup-toggle` on the `<ul>` that will help to target which tab is clicked.  When a tab is clicked, this will reveal the contents of that tab.  If the second click is made on an open or active tab, it will close the associated content and deactiveate the tab.  Each tab is a `<li>` element with the class `.evo_c-markup__item`.  The content is divided into 3 `<div>`s, each with a class of `.evo_c-markup__content`.  These 3 `<div>`s are in turn wrapped in a `<div>` with the class `.evo_c-markup__container` that sits next to the `<ul class="evo_c-markup__tabs js-c-markup-toggle">` element.  Within the `<div class="evo_c-markup__content">` elements, we added `<pre>` and `<code>` for displaying code. However, these can be removed to add content other than code.  The `<code>` elements have individual classes of `.evo_h-language-xxxx` to integrate [http://prismjs.com/](http://prismjs.com/) for syntax highlighting if you choose to add this to your project as well.

```html
    <div class="evo_c-markup">
      <ul class="evo_c-markup__tabs js-c-markup-toggle">
        <li class="evo_c-markup__item">html</li>
        <li class="evo_c-markup__item">css</li>
        <li class="evo_c-markup__item">js</li>
      </ul>
      <div class="evo_c-markup__container">
        <div class="evo_c-markup__content">
          <pre><code class="evo_h-language-html">
            <!-- HTML CODE HERE -->
          </code></pre>
        </div>
        <div class="evo_c-markup__content">
          <pre><code class="evo_h-language-css">
            <!-- CSS CODE HERE -->
          </code></pre>
        </div>
        <div class="evo_c-markup__content">
          <pre><code class="evo_h-language-javascript">
            <!-- JAVASCRIPT CODE HERE -->
          </code></pre>
        </div>
      </div>
    </div>
```
