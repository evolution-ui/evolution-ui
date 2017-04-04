## Cubby

Cubby is an evolution UI component that attempts to make displaying tabular data a little more space efficient.  It does this by hiding part of the content in a `<td>` element with the class of `.evo_c-cubby` in a `<table>` behind other data.  Content within the `<td class="evo_c-cubby">` tag is split into two `<div>`s, the first with a class of `.evo_c-cubby__door` and the second with a class of `.evo_c-cubby__inside`.  On hovering of the `<td>` cell, it creates the effect of a door swinging open to reveal the hidden content behind the first `<div class="evo_c-cubby__door">` tag.  This component requires no JavaScript.

One limitation of this component is that it requires `hover` to be firing within the client which may make it unsuitable for mobile uses.  Also, the content of both `<div>`s should be about the same amout to prevent content in `inside` to peak out from behind content from `door` until this can be remedied.

```html
<table>
  <thead>
    <tr>
      <th>Demo Column 1</th>
      <th>Demo Column 2</th>
      <th>Demo Column 3</th>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td class="evo_c-cubby">
      <div class="evo_c-cubby__door">
        Demo Door 1
      </div>
      <div class="evo_c-cubby__inside">
        More Info 1
      </div>
    </td>
    <td class="evo_c-cubby">
      <div class="evo_c-cubby__door">
        Demo Door 2
      </div>
      <div class="evo_c-cubby__inside">
        More Info 2
      </div>
    </td>
    <td class="evo_c-cubby">
      <div class="evo_c-cubby__door">
        Demo Door 3
      </div>
      <div class="evo_c-cubby__inside">
        More Info 3
      </div>
    </td>
  </tr>
</table>
```
