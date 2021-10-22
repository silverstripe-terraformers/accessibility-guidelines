# ARIA
Accessible Rich Internet Applications (ARIA) is a set of attributes that define ways to make web content and web applications (especially those developed with JavaScript) more accessible to people with disabilities.

The primary components of ARIA are: 
1. **Roles**
2. **states and properties**

Together, these components identify elements semantically.

## Why is it important to get Aria right?
Recommended reading: https://www.w3.org/TR/wai-aria-practices/#no_aria_better_bad_aria
> For screen reader users, ARIA controls the rendering of their non-visual experience.
> Incorrect ARIA misrepresents visual experiences, with potentially devastating effects on their corresponding non-visual experiences.

## Roles
ARIA roles are added to elements using the `role="<ROLE_TYPE>` attribute, which describes elements:
- that may not exist within HTML,
- which may not have full cross-browser support,
- which may have implementation gaps in screen readers and other assistive technologies.

### Don't add redundant roles
Below is a list of commonly used HTML element that contains implicit ARIA semantics (explicitly assigning these in markup is **NOT RECOMMENDED**)
See https://www.w3.org/TR/html-aria/#don-t-add-redundant-roles for more
| HTML Element | Implicit ARIA semantics(Do not need to repeat)|
| ------------- |:-------------:|
| `<a href="hi.html">hi</a>`      | `role=link` |
| `<aside>`     | `role=complementary`      |
| `<button>` | `role=button`     |
| `<dialog>` | `role=dialog`     |
| img with alt="some text" | `role=img`     |
| img with alt="" | `role=presentation`     |
| `<header>` | `role=banner`  |
| `<nav>` | `role=navigation`  |
| `<h*>` | `role=heading, aria-level=the number in the element's tag name.`  |
| `<main>` | `role=main`  |
| `<footer>` | `role=contentinfo`  |
:::info
It is **NOT RECOMMENDED** to use `aria-disabled="true` on an `<a>` element with an `href` attribute. If you do need to `disabled` a link with href, remove the `href` attribute instead
:::

See https://w3c.github.io/using-aria/#html5na for role that are without HTML element equivalent

## Aria states and attributes and misconceptions
There are a long list of Aria states and attributes, but degree of support varies, we are going to go over some misconceptions on aria attributes

### aria-label, aria-lablledby and aria-describedby
All three are robustly supported for interactive content elements such as links and form controls including the many input types.

See more on https://www.davidmacd.com/blog/does-aria-label-override-static-text.html for test results on screen reader behaviour with these attributes
:::info
`aria-label` and `aria-labelledby` have similar behaviour in screen readers and the Accessibility API, note that `aria-label` can also override other important information such as link text.
`aria-label` should be reserved for when there is no visible text on the page to reference or when keeping track of id values would be too difficult.
:::

### aria-controls
**ONLY supported in JAWS** 

https://heydonworks.com/article/aria-controls-is-poop/

### aria-haspopup
`aria-haspopup` indicates that the element has a popup context menu or sub-level menu. It should not be used for elements such as dialog
ARIA 1.1 has expanded its use to include a few other pop-up types (most notably `aria-haspopup="dialog"`), but its support is still limited.


### aria-hidden
`aria-hidden="true"` will hides the element and all its children from screen readers and other assistive technologies.
If the hidden element contains a focusable element, assistive technologies won't read the focusable element, 
but **keyboard users will still be able to navigate to it,** which can cause confusion.

See https://web.dev/aria-hidden-focus/ on how to fix

### more to come....

## Resources
ARIA markup and validator: W3C Nu Markup Checker. https://validator.w3.org/nu/
ARIA roles, state and attributes support for screen readers https://a11ysupport.io/
