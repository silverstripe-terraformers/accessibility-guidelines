# Getting started with accessibility

<a href="https://github.com/silverstripeltd/project-skeleton/blob/master/docs/accessibility.md
">accessibility.md</a> in project skeleton is a good starting point for checking whether your feature
has met accessibility guidelines.

The docs include a quick checklist as well as a more in-depth checklist should you choose to go with a more thorough check.

## The good vs the bad
Below you can find a list of good vs bad examples with what was mentioned in the checklist to make it more obvious as to why we should/shouldn't do something.
[[toc]]

### Links
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
Skip link should be placed at the top of the page
:::
**Links in general**

There's a few things to look out for when working with links:
1. Use `aria-label`, `aria-labelledby` or the `title` attribute to provide a more descriptive accessible name when the text content of the link cannot be changed.
2. All links should the focus style working
3. Use the right elements. Links should always be `<a>` and actions should be `<button>`
#### :tada: GOOD link example
```html
<a href="post.php?post=632" aria-label="More on Using Meaningful Link Text">More...</a>
```
:::tip
Would be even better if you could just avoid using non-informative link phrases(i.e."See more", "Click here") as link text.
:::

#### :lady_beetle: BAD link example
```html
<a href="post.php?post=632">
    <img src="cat.svg" aria-label="cat svg here">
    More...
</a>
```
::: warning
If the content of a link includes an img element(icon.etc), check if the icon actually needs the aria-label, the aria-label should also be descriptive
:::

### Navigation
Important thing to remember for navigation is that we should also ensure that keyboard shortcuts work for controlling the menu e.g. `esc` key `closes`, `space` key `opens` etc.

If a button controls the open state of the navigation, the button should have `aria-expanded` attribute (see Button example above)
#### :tada: GOOD Navigation example
```vue{1,6}
<nav id="nav" role="navigation" aria-label="main">
    <ul>
      <li><a href="#">Some navigation</a></li>  
    </ul>
</nav>
<secondary-nav id="secondary-nav" role="navigation" aria-label="secondary">
    <ul>
      <li><a href="#">Some navigation</a></li>
    </ul>
</seconadry-nav>
```
:::tip
We should use `aria-label` to help user to distinguish the different nav available, when using `aria-label` on a <a href="https://web.dev/use-landmarks/">landmark element(i.e. nav)</a>, don't include the word role of the landmark, as screen readers will annouce it afterwards.
:::

#### :lady_beetle: BAD Navigation example
```html
<nav id="nav">
    <ul>
        <li><a href="#">Some navigation</a></li>
    </ul>
</nav>
```
:::info
`role=”navigation”` is not required on explicit tags like `<nav>`. However older screen readers that do not support HTML5 tags will require it.
:::

## Resources
