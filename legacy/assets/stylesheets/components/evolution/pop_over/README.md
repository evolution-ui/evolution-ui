##Pop Over

This component helps show content as pop over. We can highlight specific text in a paragraph and make it clickable.

**Usage**

1. First, we need to make text clickable by wrapping

```
 	<p>
      Albert Einstein (14 March 1879 - 18 April 1955) was a German-born theoretical physicist. He developed the theory
      of relativity, one of the two pillars of modern physics (alongside quantum mechanics). Einstein’s work is also
      know for its influence on the philosophy of science. Einstein is best know in popular culture of his mass-energy
      equivalence formula E = mc2 (which has been dubbed “the world’s most famous equation”). He received the 1921
      <label for = "so2" class = "evo_c-popover__text">Nobel Prize<span class = "evo_c-popover__icon"></span></label> in
      Physics “for his
      services to theoretical physics, and especially for his discovery of the law
    </p>
```

2. Second, we also need to add content for pop over. The content can have its own header, caption and close button. 

```
<div class = "evo_c-popover h-hide" id = "so2">
    <span class = "evo_c-popover__content">
      <div class = "evo_c-popover__content--invisible"> <h3 class = "evo_c-popover__header">Header</h3><p>any of six international prizes awarded annually for outstanding work in physics, chemistry, physiology or medicine, literature, economics (since 1969), and the promotion of peace.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <span class = "evo_c-popover__content--close"></span>
    </span>
    <span class = "evo_c-popover__caption">Nobel Prize</span>
  </div>
```
