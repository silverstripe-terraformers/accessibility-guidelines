# Buttons
:::info
TLDR: **Use the `<button />` element**
:::

Buttons are fairly straightforward, ensure that:
- Check no incorrect `aria-role` has been applied to any buttons.
- Check context has been applied to the action/button e.g. `aria-label="my contextual text".`
- `aria-controls` should be added to the button if it controls another component. (i.e. opening nav)

#### :tada: GOOD button example
```html
<button aria-label="open navigation" aria-controls="nav" aria-expanded="false">Menu</button>
```
:::info
When the nav is opened, `aria-exapanded` should be true instead
:::
#### :lady_beetle: BAD button example
```html
<button><a href="hi.html">Click me!</a></button>
<div>I am a button!</div>
```
:::warning
`<button>` should not be used for links. Also try to avoid styling `<div>` as button, as you would need to do a lot of extra work to ensure that it's accessible(see resources button vs div)
:::

If you start to think about making a button out of another element have a watch of someone from the React Native team talking about doing it in bot an accessible and usable fashion: https://www.youtube.com/watch?v=LhKglxQT4sU

<div class="embed" style="padding-bottom:56.25%">
    <iframe src="https://www.youtube.com/embed/LhKglxQT4sU" frameborder="0" allowfullscreen></iframe>
</div>
