# Mezmer-UI Component Documentation

Welcome to the documentation for **Mezmer-UI**, a collection of reusable React components designed for building modern and responsive user interfaces.

---

## Table of Contents

- [Alert](#alert)
- [Card](#card)
- [Checkbox](#checkbox)
- [Container (ColomnContainer)](#container-colomncontainer)
- [DropDown](#dropdown)
- [Input](#input)
- [Modal](#modal)
- [PlainButton](#plainbutton)
- [Radio](#radio)
- [ShadowButton](#shadowbutton)
- [Spinner](#spinner)
- [Tabs](#tabs)
- [Text](#text)
- [Tooltip](#tooltip)

---

## Alert
Displays a brief, important message for the user.

### Props
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `message` | `string` | - | The message to display. |
| `type` | `"info" \| "success" \| "error" \| "warning"` | `"info"` | The type of alert (affects styling). |
| `theme` | `string` | `"default"` | Theme for the component. |
| `onClose` | `() => void` | - | Callback function when the alert is closed. |

### Usage
```tsx
import { Alert } from 'mezmer-ui';

<Alert 
  message="Operation successful!" 
  type="success" 
  onClose={() => console.log('Closed')} 
/>
```

---

## Card
A container for content that looks like a card.

### Props
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `pic` | `string` | - | URL of the image to display. |
| `title` | `string` | - | Title of the card. |
| `para` | `string` | - | Content/paragraph text. |
| `theme` | `string` | `"default"` | Theme for the component. |

### Usage
```tsx
import { Card } from 'mezmer-ui';

<Card 
  title="Card Title" 
  para="This is a simple card description." 
  pic="path/to/image.jpg" 
/>
```

---

## Checkbox
A standard checkbox input.

### Props
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `label` | `string` | - | Label for the checkbox. |
| `theme` | `string` | `"default"` | Theme for the component. |
| `checked` | `boolean` | `false` | Whether the checkbox is checked. |
| `disabled` | `boolean` | `false` | Whether the checkbox is disabled. |
| `onChange` | `(event: React.ChangeEvent<HTMLInputElement>) => void` | - | Callback when state changes. |
| `name` | `string` | - | Input name. |
| `value` | `string` | - | Input value. |

### Usage
```tsx
import { Checkbox } from 'mezmer-ui';

<Checkbox 
  label="Accept Terms" 
  onChange={(e) => console.log(e.target.checked)} 
/>
```

---

## Container (ColomnContainer)
A layout container that organizes children in rows or columns.

### Props
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `direction` | `"row" \| "column"` | `"column"` | Flex direction of the container. |
| `children` | `ReactNode` | - | Content inside the container. |

### Usage
```tsx
import { Container } from 'mezmer-ui';

<Container direction="row">
  <div>Item 1</div>
  <div>Item 2</div>
</Container>
```

---

## DropDown
A customizable dropdown menu.

### Props
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `options` | `DropDownOption[]` | `[]` | Array of `{ value, label }` objects. |
| `onSelect` | `(option: DropDownOption) => void` | - | Callback when an option is selected. |
| `selected` | `string` | - | The currently selected value. |
| `label` | `string` | `"Select"` | Placeholder text when no option is selected. |
| `theme` | `string` | `"default"` | Theme for the component. |

### Usage
```tsx
import { DropDown } from 'mezmer-ui';

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
];

<DropDown 
  options={options} 
  onSelect={(opt) => console.log(opt)} 
  label="Pick an option" 
/>
```

---

## Input
A styled text input field.

### Props
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `label` | `string` | - | Floating label for the input. |
| `id` | `string` | - | Unique identifier for the input. |
| `theme` | `string` | `"default"` | Theme for the component. |
| ...rest | `InputHTMLAttributes` | - | Standard HTML input attributes. |

### Usage
```tsx
import { Input } from 'mezmer-ui';

<Input 
  id="email" 
  label="Email Address" 
  type="email" 
  onChange={(e) => console.log(e.target.value)} 
/>
```

---

## Modal
A modal dialog overlay.

### Props
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `children` | `ReactNode` | - | Content inside the modal. |
| `theme` | `string` | `"default"` | Theme for the component. |

### Usage
```tsx
import { Modal } from 'mezmer-ui';

<Modal>
  <h2>Modal Content</h2>
  <p>This is inside the modal.</p>
</Modal>
```

---

## PlainButton
A basic styled button.

### Props
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `btntype` | `"primary" \| "secondary"` | `"primary"` | Button style variant. |
| `btntheme` | `string` | `"default"` | Theme for the component. |
| `children` | `ReactNode` | - | Button text or content. |
| ...rest | `ButtonHTMLAttributes` | - | Standard HTML button attributes. |

### Usage
```tsx
import { PlainButton } from 'mezmer-ui';

<PlainButton btntype="primary" onClick={() => alert('Clicked!')}>
  Click Me
</PlainButton>
```

---

## Radio
A standard radio input.

### Props
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `label` | `string` | - | Label for the radio button. |
| `name` | `string` | - | Name group for the radio buttons. |
| `value` | `string` | - | Value of the radio button. |
| `checked` | `boolean` | - | Whether it is selected. |
| `disabled` | `boolean` | `false` | Whether it is disabled. |
| `theme` | `string` | `"default"` | Theme for the component. |
| `onChange` | `(event) => void` | - | Callback when selection changes. |

### Usage
```tsx
import { Radio } from 'mezmer-ui';

<Radio 
  label="Option 1" 
  name="group1" 
  value="opt1" 
  onChange={(e) => console.log(e.target.value)} 
/>
```

---

## ShadowButton
A button with a customizable box-shadow effect.

### Props
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `shadowColor` | `string` | `"#ffffff"` | Color of the shadow. |
| `spread` | `string` | `"10px"` | Spread distance of the shadow. |
| `inside` | `boolean` | `false` | If `true`, the shadow is an inset shadow. |
| `btntype` | `"primary" \| "secondary"` | `"primary"` | Button style variant. |
| `btntheme` | `string` | `"default"` | Theme for the component. |
| `children` | `ReactNode` | - | Button content. |

### Usage
```tsx
import { ShadowButton } from 'mezmer-ui';

<ShadowButton shadowColor="rgba(0,0,0,0.5)" spread="20px">
  Glow Button
</ShadowButton>
```

---

## Spinner
A loading indicator.

### Props
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Size of the spinner. |
| `theme` | `string` | `"default"` | Theme for the component. |

### Usage
```tsx
import { Spinner } from 'mezmer-ui';

<Spinner size="lg" theme="dark" />
```

---

## Tabs
A component for switching between different views.

### Props
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `tabs` | `Tab[]` | - | Array of `{ label, content }` objects. |
| `theme` | `string` | `"default"` | Theme for the component. |

### Usage
```tsx
import { Tabs } from 'mezmer-ui';

const tabs = [
  { label: 'Tab 1', content: <div>Content 1</div> },
  { label: 'Tab 2', content: <div>Content 2</div> },
];

<Tabs tabs={tabs} />
```

---

## Text
A versatile typography component.

### Props
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `textType` | `"h1"..."h6" \| "p" \| "span" \| "div"` | `"h1"` | The HTML tag to render. |
| `theme` | `string` | `"default"` | Theme for the component. |
| `children` | `ReactNode` | - | Text content. |

### Usage
```tsx
import { Text } from 'mezmer-ui';

<Text textType="h2">This is a heading</Text>
<Text textType="p">This is a paragraph.</Text>
```

---

## Tooltip
Displays information when hovering over an element.

### Props
| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `content` | `ReactNode` | - | The content to show inside the tooltip. |
| `children` | `ReactNode` | - | The element that triggers the tooltip. |
| `theme` | `string` | `"default"` | Theme for the component. |

### Usage
```tsx
import { Tooltip } from 'mezmer-ui';

<Tooltip content="Tooltip message">
  <button>Hover me</button>
</Tooltip>
```
