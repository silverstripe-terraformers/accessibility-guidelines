# Links

## Skip links
**Skip link** allows keyboard users to be able to avoid some areas of page and/or give them a more direct access to a content area,
enabling a faster navigation experience.
#### :tada: GOOD skip link example
```html{2,3,5,10}
<nav class="au-skip-link" aria-label="skip links navigation">
  <a class="au-skip-link__link" href="#content">Skip to main content</a>
  <a class="au-skip-link__link" href="#nav">Skip to main navigation</a>
</nav>
<nav id="nav" tabindex="-1" aria-label="skip links navigation">
  <ul>
    <li><a href="#">Some navigation</a></li>
  </ul>
</nav>
<div id="content" tabindex="-1">
  Some content here
</div>
```
:::info
The content that the skip links goes to is linked with an id and it moves the focus to the element with tabindex="-1".
:::

#### :lady_beetle: BAD skip link
```html
<nav id="nav">
    <ul>
        <li><a href="#">Some navigation</a></li>
    </ul>
</nav>
<nav class="au-skip-link" aria-label="skip links navigation">
    <a class="au-skip-link__link" href="#content">Skip to content</a>
</nav>
<div id="content" tabindex="-1">
    Some content here
</div>
```
:::warning
Because the skip link is placed after the navigation on every page load a user will have to tab through every navigation link
:::

## Generic links

There's a few things to look out for when working with links:
1. Use `aria-label`, `aria-labelledby` or the `title` attribute to provide a more descriptive name when the text content of the link cannot be changed.
2. All links should have focus styling (don't disable the outline without an alternative)
3. Use the right elements. Links should always be `<a>` elements and actions should be `<button>`
#### :tada: GOOD link example
```html
<a href="post.php?post=632" aria-label="More on Using Meaningful Link Text">More...</a>
```
:::tip
This would be even better if you could just avoid using non-informative link phrases(i.e."See more", "Click here") as link text.
:::

#### :lady_beetle: BAD link example
```html
<a href="post.php?post=632">
    <img src="cat.svg" aria-label="cat svg here">
    More...
</a>
```
::: warning
If the content of a link includes an `img` element (e.g. an icon), check if the `img` actually needs the aria-label, the aria-label should also be descriptive
:::
