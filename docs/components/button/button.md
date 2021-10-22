# Buttons
:::info
TLDR: **Use the `<button />` element**
:::

Buttons are fairly straightforward, ensure that:
- If the buttons content does not provide context then check context has been applied to the button `aria-label="my contextual text".`
- `aria-controls` should be added to the button if it controls another component. (i.e. opening nav)
## Examples:
### :tada: GOOD button example
```html
<button aria-label="open navigation" aria-controls="nav" aria-expanded="false">Menu</button>
```
:::info
`aria-expanded` should reflect the state of the `#nav`. Ensure its updated to `true`, when the nav is opened.
:::
### :lady_beetle: BAD button example
```html
<a class="button" onclick="runMyJs()">Click me!</a>
<div onclick="runMyJs()">I am a button!</div>
```
:::warning
In both examples we're using elements that are not `<button />` elements to trigger interactions. Screen readers will not be able to tell that the `<a>` tag is not a link and they will not be able to tell that the `<div>` is intractable
:::

If you start to think about making a button out of another element have a watch of someone from the React Native team talking about doing it in bot an accessible and usable fashion: https://www.youtube.com/watch?v=LhKglxQT4sU

<div class="embed" style="padding-bottom:56.25%">
    <iframe src="https://www.youtube.com/embed/LhKglxQT4sU" frameborder="0" allowfullscreen></iframe>
</div>
