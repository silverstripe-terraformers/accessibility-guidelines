# Images
:::info
**TLDR**: Follow the guide: https://www.w3.org/WAI/tutorials/images/decision-tree/ to see if your image is decorative or contextual
:::

It's important to understand the difference between `Decorative image` vs `Contextual image`. 
**Decorative image** doesn't add information to the content of the page.
Images may be decorative when they are:
1. Visual styling (borders, corners.etc)
2. Supplementary to surrounding text (improving the clickable area or only for illustrative purpose)

#### :tada: GOOD Decorative image example:
```html{2}
<a href="crocuspage.html">
	<img src="crocus.jpg" alt="">
	<strong> Crocus bulbs</strong>
</a>
```
You can also use `role="presentation"`, but it's not as well supported as the empty alt attribute
#### :lady_beetle: BAD decorative image example:
```html
<a href="crocuspage.html">
	<img src="crocus.jpg" alt="crocus bulbs">
	<strong> Crocus bulbs</strong>
</a>
```
::: tip
This will result in the screen reader reading the `crocus bulbs` twice, `alt` is not needed to describe what's already been described by the surrounding text. **Only use alt with contextual image**
:::

**Contextual image** is the opposite and will represent concepts/information(i.e. Images conveying an impression or supplement other information)
#### :tada: GOOD contextual Image
```html
<img src="cap.png" alt="Push the cap down and turn it counter-clockwise (from right to left)">
```
:::warning
Without adding the alt tag for contextual image, it could result in people using screen reader technologies missing out on important information.
:::

#### :lady_beetle: BAD contextual image example:
```html
<img src="cap.png" alt="instruction picture for how to open this special cap">
```
::: tip
Alt should also be meaningful and describe the image accurately, it's especially important if the image is supplying information
:::

**SVG** can be contextual or decorative depending on the use case.
Check SVG images have appropriate meta descriptions and titles applied or are using aria-labelledby
#### :tada: GOOD inline SVG images(Contextual)
```html{1,4,5}
<svg role="img" aria-labelledby="lightbulb11 description11" version="1.1" class="hotpink" 
     xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" 
     viewBox="0 0 48 48" style="enable-background:new 0 0 48 48;" xml:space="preserve">
      <title id="lightbulb11">Lightbulb moment!</title>
      <desc id="description11">I have a great idea.</desc>
<path d="M19,39v-1h-0.5c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5H19v-2h10v2h0.5c0.3,0,0.5,0.2,0.5,0.5S29.8,38,29.5,38H29v1h0.5
    c0.3,0,0.5,0.2,0.5,0.5S29.8,40,29.5,40H29c0,0-1.4,3-5,3s-5-3-5-3h-0.5c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5H19z M20,39h8v-1h-8
    V39z M20.2,40c0.2,0.3,0.4,0.5,0.7,0.8c0.8,0.8,1.9,1.2,3.2,1.2s2.3-0.5,3.2-1.2c0.3-0.2,0.5-0.5,0.7-0.8H20.2L20.2,40z M20,37h8v-1
    h-8V37z M16.1,7.8c-0.1-0.2,0-0.5,0.2-0.7c0.2-0.1,0.5,0,0.7,0.2l1.6,3.2c0.1,0.2,0,0.5-0.2,0.7c-0.2,0.1-0.5,0-0.7-0.2
    C17.7,11,16.1,7.8,16.1,7.8z M30.2,7.4c0.1-0.2,0.4-0.4,0.7-0.2c0.2,0.1,0.4,0.4,0.2,0.7L29.5,11c-0.1,0.2-0.4,0.4-0.7,0.2
    c-0.2-0.1-0.4-0.4-0.2-0.7C28.6,10.6,30.2,7.4,30.2,7.4z M23.1,6c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5v3.2c0,0.3-0.2,0.5-0.5,0.5
    s-0.5-0.2-0.5-0.5V6z M10.8,11.9c-0.2-0.2-0.2-0.5,0-0.7c0.2-0.2,0.5-0.2,0.7,0l2.3,2.4c0.2,0.2,0.2,0.5,0,0.7
    c-0.2,0.2-0.5,0.2-0.7,0C13.1,14.3,10.8,11.9,10.8,11.9z M7.9,17.7c-0.3-0.1-0.4-0.3-0.4-0.6c0.1-0.3,0.3-0.4,0.6-0.4c0,0,0,0,0,0
    l3.1,0.8c0.3,0.1,0.4,0.3,0.4,0.6c-0.1,0.3-0.3,0.4-0.6,0.4c0,0,0,0,0,0C11,18.5,7.9,17.7,7.9,17.7z M39.7,17.7l-3.1,0.8
    c-0.3,0.1-0.5-0.1-0.6-0.4c-0.1-0.3,0.1-0.5,0.3-0.6l3.1-0.8c0.3-0.1,0.5,0.1,0.6,0.4C40.1,17.4,40,17.6,39.7,17.7z M35.7,11.3
    c0.2-0.2,0.5-0.2,0.7,0c0.2,0.2,0.2,0.5,0,0.7c0,0,0,0,0,0l-2.3,2.4c-0.2,0.2-0.5,0.2-0.7,0c-0.2-0.2-0.2-0.5,0-0.7c0,0,0,0,0,0
    L35.7,11.3z M18.8,34c0-5.5-4.8-5.5-4.8-12.6c0-5,4.5-9.4,10-9.4s10,4.4,10,9.4c0,7.1-4.8,7.1-4.8,12.6H18.8z M28.2,33
    c0.2-1.8,0.8-3,2.1-4.7l0.4-0.6c1.6-2.1,2.2-3.5,2.2-6.3c0-4.5-4.1-8.4-9-8.4s-9,3.9-9,8.4c0,2.7,0.6,4.2,2.2,6.3l0.4,0.6
    c1.3,1.7,1.9,3,2.1,4.7C19.8,33,28.2,33,28.2,33z M21.4,15.9c0.3-0.1,0.5,0.1,0.6,0.3c0.1,0.2,0,0.5-0.3,0.6c-1.8,0.7-3.2,2.2-3.9,4
    c-0.1,0.3-0.4,0.4-0.6,0.3c-0.2-0.1-0.4-0.4-0.3-0.6C17.6,18.4,19.3,16.7,21.4,15.9z"/>
</svg>
```
:::info
If the SVG is used by itself as a contextual image, the combo of using`<svg> + role="img" + <title> + <desc> + aria-labelledby="[ID]"` provides
the most reliable choice for the different browser and screen readers that were tested.
:::

## When should I use an `alt` tag?
Follow the guide: https://www.w3.org/WAI/tutorials/images/decision-tree/

## Resouces
- SVG and accessibility? https://www.deque.com/blog/creating-accessible-svgs/
