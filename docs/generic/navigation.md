# Navigation
When implementing navigation through modal interfaces it's important to remember that you should implement the expected controls:
- `esc` closes the modal
- `tab` will cycle through only the items inside the modal
- `shift + tab` will cycle through in reverse only the items inside the modal

If a button controls the open state of the navigation, the button should have `aria-expanded` attribute (see Components -> Button)
## Examples:

### :tada: GOOD Navigation example
```vue{1,6}
<nav id="nav" aria-label="main">
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
We should use `aria-label` to help user to distinguish the different `nav` elements available, when using `aria-label` on a <a href="https://web.dev/use-landmarks/">landmark element(i.e. nav)</a>, don't include the word role of the landmark, as screen readers will annouce it afterwards.
:::

### :lady_beetle: BAD Navigation example
```html
<nav id="nav">
    <ul>
        <li><a href="#">Some navigation</a></li>
    </ul>
</nav>
```
