# Navigation
Important thing to remember for navigation is that we should also ensure that keyboard shortcuts work for controlling the menu e.g. `esc` key `closes`, `space` key `opens` etc.

If a button controls the open state of the navigation, the button should have `aria-expanded` attribute (see Components -> Button)
## Examples:

### :tada: GOOD Navigation example
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

### :lady_beetle: BAD Navigation example
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
