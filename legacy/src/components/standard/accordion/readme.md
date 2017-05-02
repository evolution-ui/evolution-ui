## Accordion

The accordion is a standard UI component that has been used around the web for some time now.  Our accordion is built off of an unordered list structure containing the class `.evo_c-accordion`.  The tab title and its contents are contained within an `<li>` element with the class `.evo_c-accordion__bellow` (a bellow is what expands and contracts on an actual accordion).  The tab titles are styled anchor tags (`<a href="#">`) with a class of `.evo_c-accordion__title` for semantics.  This is then followed by the content for each tab contained within a `<div>` with the class `.evo_c-accordion__content`.  The expanding and contracting functionality is accomplished with some JavaScript via a hook in the anchor tag with the class `.js-c-accordion-target`.  Multiple accordions can be used on the same page and will expand and contract independently from one another.

You can easily use this component in your next project by using the following HTML code (along with the JavaScript code) as a base while adding your own content within the `<div class="evo_c-accordion__content">` tags.  To add more tab titles, simply add more `<li>` elements in the same pattern.

```html
<ul class="evo_c-accordion">
  <li class="evo_c-accordion__bellow">
    <a class="evo_c-accordion__title js-c-accordion-target" href="#">Bellow Title</a>
    <div class="evo_c-accordion__content">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit corrupti nulla, aliquid maiores. Enim itaque incidunt, quo ratione dignissimos officiis. Optio, deleniti eligendi similique ipsa quae aliquid quis nam quo.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis iusto pariatur doloribus. Maxime, tenetur, eveniet. Temporibus, dignissimos asperiores fuga est minus ullam quidem! Cupiditate expedita accusamus pariatur temporibus, quam, voluptate.</p>
    </div>
  </li>
  <li class="evo_c-accordion__bellow">
    <a class="evo_c-accordion__title js-c-accordion-target" href="#">Bellow Title</a>
    <div class="evo_c-accordion__content">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique est molestias, quo ipsam itaque eius, alias amet ipsum rerum, dolorum suscipit placeat voluptatem obcaecati in maxime perspiciatis doloribus veritatis libero.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus tempore sed voluptatibus unde explicabo? Libero soluta ad autem maiores nemo veniam quidem molestiae eos laborum deleniti hic facere sit, in!</p>
    </div>
  </li>
  <li class="evo_c-accordion__bellow">
    <a class="evo_c-accordion__title js-c-accordion-target" href="#">Bellow Title</a>
    <div class="evo_c-accordion__content">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro delectus vero doloribus velit voluptatibus provident tempora laudantium ex, veniam voluptas qui necessitatibus reiciendis repellat ad quasi magni voluptate rerum. Vel.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate aut, ipsa! Et atque eaque, optio tempora velit. Dignissimos modi distinctio porro tempore omnis numquam possimus, officia recusandae quia earum aspernatur.</p>
    </div>
  </li>
  <li class="evo_c-accordion__bellow">
    <a class="evo_c-accordion__title js-c-accordion-target" href="#">Bellow Title</a>
    <div class="evo_c-accordion__content">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut hic iure sed cumque quod. Nemo minus, placeat cumque asperiores quibusdam at est quas, facilis repellat ipsum dicta hic unde accusamus!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque voluptas, vero error laboriosam aspernatur dolorem vel suscipit qui odio unde totam perferendis distinctio dolores molestias earum reprehenderit eveniet quod eligendi!</p>
    </div>
  </li>
</ul>
```
