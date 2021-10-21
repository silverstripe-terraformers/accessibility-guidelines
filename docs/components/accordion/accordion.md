<script setup>
import AccordionItem from './Accordion.vue'
</script>

# Accordion
An accordion is a vertically stacked set of interactive headings that each contain a title, content snippet, or thumbnail representing a section of content. The headings function as controls that enable users to reveal or hide their associated sections of content. Accordions are commonly used to reduce the need to scroll when presenting multiple sections of content on a single page.

**Header:**
Label for or thumbnail representing a section of content that also serves as a control for showing, and in some implementations, hiding the section of content.

**Panel/content:**
Section of content associated with an accordion header.

## Making the spec easy to read:
Looking through the [spec](https://www.w3.org/TR/wai-aria-practices-1.1/#keyboard-interaction) we have required/optional keyboard interactions and aria roles/states.

**Header Interactions:**
| Key | Required | Action |
| --- | :---: | --- |
| `Enter` or `Space` | ✅ | Changes the collapsed/expanded state of the associated panel. |
| `Arrow Down` | ❌ | Moves focus to the **next** accordion header. |
| `Arrow Up` | ❌ | Moves focus to the **previous** accordion header. |
| `Home` | ❌ | Moves focus to the **first** accordion header. |
| `End` | ❌ | Moves focus to the **last** accordion header. |

**WAI-ARIA Roles, States, and Properties:**
| Element | Attribute | Role | Required | Notes |
| --- | --- | --- | :---: | --- |
| Header | | `button` | ✅ | The title of each accordion header is within a `<button />` (Only set `role` if the element is not a `button`) |
| Header | | `h*` | ✅ | Each accordion header button is wrapped in an element with role heading (e.g. `<h3><button>Read more</button></h3>`) |
| Header | `aria-controls` |  | ❌ | Each button within an accordion header, is associated with its corresponding panel by using `aria-controls="<panel-id>"` |
| Header | `disabled` |  | ❌ | If a panel can't be collapsed (e.g.: at least one panel needs to be open), that is indicated using the `disabled` attribute |
| Panel | `aria-expanded` |  | ✅ | Each accordion panel has an ARIA attribute identifying its state:<li>Expanded: `aria-expanded="true"`</li><li>Collapsed: `aria-expanded="false"`</li> |
| Panel | `region` |  | ❌ | Each panel is a `<section />` and uses its associated accordion header as its label, by using the attribute `aria-labelledby="<header-id>"`. This can be helpful for screen reader users to perceive the structure of the accordion. |

## Code
Alright lets break down each part of the accordion in plain HTML.

**Header:**
```html
<h*>
    <button>Example</button>
</h*>
```

As mentioned we require a heading either through the use of a header element or through the use of the attribute `role` (ideally use a header element).

**Panel:**
```html
<section>
    <p>My awesome content</p>
</section>
```
For this we're using `section` so that it shows up in screen readers that use landmarks for navigation (You can test this in Chromes acessibility tree). If there are a lot of accordions then it might make sense to use `div` tags instead to prevent the user from having too many landmarks.

**Wiring the two components up together:**

**Open state:**
```html
<h*>
    <button
        id="accordion-header-1"
        aria-controls="accordion-panel-1"
        aria-expanded="true"
    >
        Example
    </button>
</h*>
<section id="accordion-panel-1"
         aria-labelledby="accordion-header-1">
    <p>My awesome content</p>
</section>
```
We have the following:
- The two `id`'s set so we can start to form relations between the two elements
- `aria-controls` on the `<button />` so that we clearly inform screen readers that this button controls the section with our contents.
- `aria-labelledby` which allows screen readers to associate the header with content
- `aria-expanded` informs screen readers that this will expand/collapse the linked content

**Closed state:**
```html
<h*>
    <button
        id="accordion-header-1"
        aria-controls="accordion-panel-1"
        aria-expanded="false"
    >
        Example
    </button>
</h*>
<section id="accordion-panel-1"
         aria-labelledby="accordion-header-1"
         hidden>
    <p>My awesome content</p>
</section>
```
When the accodrion is closed we change the following:
- `aria-expanded` is set to false
- `<section />` adds a `hidden` attribute to the element


## Vue example
We'll break down a basic Vue component that supports accordions (mind the styling we're not interested in CSS for this component)
<ClientOnly><AccordionItem heading="h2" title="My Section" id="item-1"><p>Lorem ipsum dolor sit amet...</p></AccordionItem></ClientOnly>

```vue
<AccordionItem heading="h2" title="My Section" id="item-1">
    <p>Lorem ipsum dolor sit amet...</p>
</AccordionItem>
```

**Code:**
```vue
<template>
  <component :is="heading">
    <button
      :id="id + '-header'"
      :aria-controls="id + '-panel'"
      :aria-expanded="isExpanded"
      @click="toggle"
    >
      {{ title }}
    </button>
  </component>
  <section
    :id="id + '-panel'"
    :aria-labelledby="id + '-header'"
    :hidden="!isExpanded"
  >
    <slot></slot>
  </section>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  heading: {
    type: String,
    default: "h3",
  },
});

const isExpanded = ref(false);

const toggle = () => {
  isExpanded.value = !isExpanded.value;
};
</script>
```



## Resources
- Aria practices: https://w3c.github.io/aria-practices/#accordion
- Aria practices example: https://www.w3.org/TR/wai-aria-practices-1.1/examples/accordion/accordion.html
- A11y support example: https://a11ysupport.io/tech/aria/aria-controls_attribute
- Sonder: https://github.com/microsoft/sonder-ui/tree/master/src/components/disclosure