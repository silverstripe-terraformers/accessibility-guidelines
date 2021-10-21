# Animations

## From hidden to visisble and vice versa
A common mistake we see when an hidding content is the hidden content is still accessed by screen reader users. _This can be intentional if it makes browsing easier for screen readers but that is likely to be the exception to the rule and not the default_.

**First ask, are animations essential?**
If not then we can use the `hidden` attribute. This makes life easy and is applied to both users with screen readers and users with more standard browsers.

**We need animations to look cool 😎**
When content is hidden use `aria-hidden="true"` to mark the content as hidden. You'll then need to ensure that the element is not interactable (e.g. just because it's not visisble doesn't mean users can't focus elements inside it). This can start to become tedious and you may look to use `hidden`, remove the attribute, then apply your animation.