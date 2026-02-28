# UI Library Documentation Site Instructions

This document outlines the structure and content required to build a comprehensive documentation site for the Mezmer UI Library. The goal is to provide clear instructions for developers on how to use each component, understand its properties, and see practical examples.

## General Documentation Site Setup

Consider using tools like [Storybook](https://storybook.js.org/), [Docusaurus](https://docusaurus.io/), or a custom React-based documentation solution. These tools offer features like live code examples, prop tables, and easy navigation, which are ideal for UI component libraries.

## Component Documentation Structure

For each component in the `src/components` directory, the documentation should include the following sections:

---

## 1. Checkbox

### Description

A customizable checkbox component that can be used individually or as part of a group. It supports different themes and manages its own checked state.

### Props

| Prop Name | Type    | Description                                   | Default Value |
| :-------- | :------ | :-------------------------------------------- | :------------ |
| `theme`   | `string`| Applies a predefined theme ('light', 'dark'). | `'default'`   |
| `label`   | `string`| The text label displayed next to the checkbox.| `undefined`   |
| `onChange`| `func`  | Callback function triggered on change.        | `undefined`   |
| `checked` | `boolean`| Controls the checked state of the checkbox.   | `false`       |
| `disabled`| `boolean`| Disables the checkbox if true.                | `undefined`   |
| `name`    | `string`| The name attribute for the input element.     | `undefined`   |
| `value`   | `string`| The value attribute for the input element.    | `undefined`   |

### Usage Example

```jsx
import React, { useState } from "react";
import { Checkbox } from "mezmer-ui"; // Assuming 'mezmer-ui' is your package name

function MyForm() {
  const [checkedItems, setCheckedItems] = useState({});

  const options = [
    { label: "Option A", value: "optionA" },
    { label: "Option B", value: "optionB" },
    { label: "Option C", value: "optionC" },
  ];

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems({ ...checkedItems, [name]: checked });
  };

  return (
    <div>
      <h3>Select your options:</h3>
      {options.map((option) => (
        <Checkbox
          key={option.value}
          theme="dark"
          label={option.label}
          name={option.value}
          value={option.value}
          checked={checkedItems[option.value] || false}
          onChange={handleCheckboxChange}
        />
      ))}
      <p>Currently selected: {JSON.stringify(checkedItems)}</p>
    </div>
  );
}
```

### Styling Notes

- Uses CSS Modules (`Checkbox.module.css`) for component-scoped styling.
- The `theme` prop utilizes `ThemeFunctionConponent` to apply `btn-light` or `btn-dark` classes, which are defined in `src/styles/tokens.css` and `src/index.css`. These classes control background and text colors.

---

## 2. Radio

### Description

A customizable radio button component, typically used within a group where only one option can be selected at a time.

### Props

| Prop Name | Type    | Description                                   | Default Value |
| :-------- | :------ | :-------------------------------------------- | :------------ |
| `theme`   | `string`| Applies a predefined theme ('light', 'dark'). | `'default'`   |
| `label`   | `string`| The text label displayed next to the radio button.| `undefined`   |
| `name`    | `string`| **Required.** Groups radio buttons together. Only one radio button with the same `name` can be selected. | `undefined` |
| `value`   | `string`| The value associated with the radio button.   | `undefined`   |
| `checked` | `boolean`| Controls the checked state of the radio button. | `false`       |
| `onChange`| `func`  | Callback function triggered on change.        | `undefined`   |
| `disabled`| `boolean`| Disables the radio button if true.            | `undefined`   |

### Usage Example

```jsx
import React, { useState } from "react";
import { Radio } from "mezmer-ui";

function MyRadioGroup() {
  const [selectedOption, setSelectedOption] = useState("option1");

  const radioOptions = [
    { label: "First Choice", value: "option1" },
    { label: "Second Choice", value: "option2" },
    { label: "Third Choice", value: "option3" },
  ];

  return (
    <div>
      <h3>Choose an option:</h3>
      {radioOptions.map((option) => (
        <Radio
          key={option.value}
          theme="light"
          label={option.label}
          name="myRadioGroup" // All radios in a group must have the same name
          value={option.value}
          checked={selectedOption === option.value}
          onChange={(e) => setSelectedOption(e.target.value)}
        />
      ))}
      <p>Selected: {selectedOption}</p>
    </div>
  );
}
```

### Styling Notes

- Uses CSS Modules (`Radio.module.css`).
- The `theme` prop applies `btn-light` or `btn-dark` classes to the container, influencing overall appearance.
- Custom styling is applied to hide the native radio input and create a custom visual indicator.

---

## 3. Alert

### Description

A component used to display important messages to the user, such as success, error, warning, or informational notices.

### Props

| Prop Name | Type    | Description                                   | Default Value |
| :-------- | :------ | :-------------------------------------------- | :------------ |
| `message` | `string`| The content of the alert message.             | `undefined`   |
| `type`    | `string`| The type of alert: `'info'`, `'success'`, `'warning'`, `'error'`. | `'info'`      |
| `theme`   | `string`| Applies a predefined theme ('light', 'dark'). | `'default'`   |
| `onClose` | `func`  | Optional callback for when the alert is closed. If provided, a close button will be rendered. | `undefined` |

### Usage Example

```jsx
import React from "react";
import { Alert } from "mezmer-ui";

function AppAlerts() {
  const handleClose = () => {
    console.log("Alert closed!");
  };

  return (
    <div>
      <Alert message="This is an informational message." type="info" theme="dark" />
      <Alert message="Operation completed successfully!" type="success" theme="light" />
      <Alert message="Warning: Some data might be outdated." type="warning" type="warning" theme="dark" onClose={handleClose} />
      <Alert message="Error: Failed to load resources." type="error" theme="light" onClose={handleClose} />
    </div>
  );
}
```

### Styling Notes

- Uses CSS Modules (`Alert.module.css`).
- `type` prop applies specific background and text colors for different alert states (e.g., `.success`, `.error`).
- The `theme` prop applies `btn-light` or `btn-dark` classes to the container, which can further customize the alert's appearance based on the global theme.

---

## 4. Tabs

### Description

A component for organizing and displaying content in a tabbed interface, allowing users to switch between different sections.

### Props

| Prop Name | Type    | Description                                   | Default Value |
| :-------- | :------ | :-------------------------------------------- | :------------ |
| `tabs`    | `array` | An array of objects, each with a `label` (string) and `content` (ReactNode). | `[]`          |
| `theme`   | `string`| Applies a predefined theme ('light', 'dark'). | `'default'`   |

### Usage Example

```jsx
import React from "react";
import { Tabs } from "mezmer-ui";

function AppTabs() {
  const myTabs = [
    { label: "Profile", content: <p>User profile information goes here.</p> },
    { label: "Settings", content: <p>Application settings can be adjusted here.</p> },
    { label: "Activity", content: <p>Recent user activity log.</p> },
  ];

  return (
    <div style={{ width: '500px' }}>
      <Tabs tabs={myTabs} theme="dark" />
    </div>
  );
}
```

### Styling Notes

- Uses CSS Modules (`Tabs.module.css`).
- The `theme` prop applies `btn-light` or `btn-dark` classes to the main tabs container, affecting the background and text colors of the tabs and content area.
- Active tabs have distinct styling to indicate their selected state.

---

## 5. Tooltip

### Description

A small, contextual popup that displays information when a user hovers over or focuses on an element.

### Props

| Prop Name | Type    | Description                                   | Default Value |
| :-------- | :------ | :-------------------------------------------- | :------------ |
| `children`| `ReactNode`| The element that triggers the tooltip.      | `undefined`   |
| `content` | `ReactNode`| The content to be displayed inside the tooltip. | `undefined`   |
| `theme`   | `string`| Applies a predefined theme ('light', 'dark'). | `'default'`   |

### Usage Example

```jsx
import React from "react";
import { Tooltip } from "mezmer-ui";

function AppTooltips() {
  return (
    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', padding: '50px' }}>
      <Tooltip content="This is a helpful hint!" theme="dark">
        <button>Hover for info</button>
      </Tooltip>
      <Tooltip content={<span>More details here.</span>} theme="light">
        <span>Focus on me</span>
      </Tooltip>
    </div>
  );
}
```

### Styling Notes

- Uses CSS Modules (`Tooltip.module.css`).
- The `theme` prop applies `btn-light` or `btn-dark` classes to the tooltip's content container, controlling its background and text colors.
- Positioned absolutely above the trigger element.

---

## 6. Spinner

### Description

A visual indicator used to show that a process is loading or an action is in progress.

### Props

| Prop Name | Type    | Description                                   | Default Value |
| :-------- | :------ | :-------------------------------------------- | :------------ |
| `size`    | `string`| The size of the spinner: `'sm'`, `'md'`, `'lg'`. | `'md'`        |
| `theme`   | `string`| Applies a predefined theme ('light', 'dark'). | `'default'`   |

### Usage Example

```jsx
import React from "react";
import { Spinner } from "mezmer-ui";

function AppSpinners() {
  return (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'center', padding: '50px' }}>
      <Spinner size="sm" theme="dark" />
      <Spinner size="md" theme="light" />
      <Spinner size="lg" theme="dark" />
    </div>
  );
}
```

### Styling Notes

- Uses CSS Modules (`Spinner.module.css`).
- The `size` prop applies specific CSS classes (`.sm`, `.md`, `.lg`) to control the dimensions of the spinner dots.
- The `theme` prop applies `btn-light` or `btn-dark` classes directly to the individual spinner dots, controlling their background color to ensure visibility against different backgrounds.

---

## 7. Card

### Description

A versatile card component that can display an image, a title, and a paragraph of text. It supports different themes.

### Props

| Prop Name | Type | Description | Default Value |
| :-------- | :--- | :---------- | :------------ |
| `pic` | `string` | The URL of the image to display at the top of the card. | `undefined` |
| `title` | `string` | The main title of the card. | `undefined` |
| `para` | `string` | The paragraph text content of the card. | `undefined` |
| `theme` | `string` | Applies a predefined theme ('light', 'dark'). | `'default'` |

### Usage Example

```jsx
import React from "react";
import { Card } from "mezmer-ui";

function AppCards() {
  return (
    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', padding: '50px' }}>
      <Card
        pic="https://via.placeholder.com/150"
        title="Card Title One"
        para="This is the paragraph content for the first card. It can be a bit longer to demonstrate text wrapping."
        theme="light"
      />
      <Card
        title="Card Title Two"
        para="This card has no image, demonstrating flexibility in content display."
        theme="dark"
      />
      <Card
        pic="https://via.placeholder.com/200/0000FF/FFFFFF?text=Image+Two"
        title="Another Card"
        para="A short description for another card example."
        theme="light"
      />
    </div>
  );
}
```

### Styling Notes

- Uses CSS Modules (`Card.module.css`) for component-scoped styling.
- The `theme` prop utilizes `ThemeFunctionConponent` to apply `btn-light` or `btn-dark` classes, which are defined in `src/styles/tokens.css` and `src/index.css`. These classes control background and text colors.
- The `imgdiv` class handles image display, ensuring it covers the allocated space and maintains aspect ratio.
- `heading` and `para` classes style the title and paragraph text respectively.

---

## 8. ColomnContainer

### Description

A flexible container component that arranges its children in either a column or a row layout.

### Props

| Prop Name | Type | Description | Default Value |
| :-------- | :--- | :---------- | :------------ |
| `children` | `ReactNode` | The content to be rendered inside the container. | `undefined` |
| `direction` | `'row' \| 'column'` | Specifies the flex direction of the container. | `'column'` |

### Usage Example

```jsx
import React from "react";
import { ColomnContainer, Card, PlainButton } from "mezmer-ui";

function AppContainers() {
  return (
    <ColomnContainer direction="column" style={{ gap: '20px', padding: '20px' }}>
      <h3>Column Layout Example:</h3>
      <Card title="Item 1" para="Content for item 1" theme="light" />
      <Card title="Item 2" para="Content for item 2" theme="dark" />
      <PlainButton label="Click Me" theme="light" />

      <h3>Row Layout Example:</h3>
      <ColomnContainer direction="row" style={{ gap: '10px' }}>
        <PlainButton label="Button A" theme="dark" />
        <PlainButton label="Button B" theme="light" />
        <PlainButton label="Button C" theme="dark" />
      </ColomnContainer>
    </ColomnContainer>
  );
}
```

### Styling Notes

- Uses CSS Modules (`Container.module.css`) for component-scoped styling.
- The `direction` prop dynamically applies either `.Columncontainer` (default) or `.Rowcontainer` class, which sets `flex-direction` to `column` or `row` respectively.
- Both classes apply a default `gap` of `20px` between children.

---

## 9. DropDown

### Description

A customizable dropdown component that allows users to select an option from a list. It supports different themes and manages its open/closed state.

### Props

| Prop Name | Type | Description | Default Value |
| :-------- | :--- | :---------- | :------------ |
| `theme` | `string` | Applies a predefined theme ('light', 'dark'). | `'default'` |
| `options` | `DropDownOption[]` | An array of objects, each with a `value` (string) and `label` (string). | `[]` |
| `selected` | `string` | The `value` of the currently selected option. | `undefined` |
| `onSelect` | `(option: DropDownOption) => void` | Callback function triggered when an option is selected. | `undefined` |
| `label` | `string` | The default text displayed when no option is selected. | `'Select'` |

### Usage Example

```jsx
import React, { useState } from "react";
import { DropDown } from "mezmer-ui";

function AppDropDowns() {
  const [selectedFruit, setSelectedFruit] = useState("");
  const [selectedColor, setSelectedColor] = useState("blue");

  const fruitOptions = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "orange", label: "Orange" },
  ];

  const colorOptions = [
    { value: "red", label: "Red" },
    { value: "green", label: "Green" },
    { value: "blue", label: "Blue" },
    { value: "yellow", label: "Yellow" },
  ];

  return (
    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', padding: '50px' }}>
      <DropDown
        theme="light"
        options={fruitOptions}
        selected={selectedFruit}
        onSelect={(option) => setSelectedFruit(option.value)}
        label="Choose a Fruit"
      />
      <DropDown
        theme="dark"
        options={colorOptions}
        selected={selectedColor}
        onSelect={(option) => setSelectedColor(option.value)}
        label="Pick a Color"
      />
      <p>Selected Fruit: {selectedFruit}</p>
      <p>Selected Color: {selectedColor}</p>
    </div>
  );
}
```

### Styling Notes

- Uses CSS Modules (`DropDown.module.css`) for component-scoped styling.
- The `theme` prop utilizes `ThemeFunctionConponent` to apply `btn-light` or `btn-dark` classes to the select button and list items, controlling their background and text colors.
- The dropdown list (`.DropDownList`) has animated `display` and `transform` properties for a smooth open/close effect.
- Custom scrollbar styling is applied to the dropdown list.
- The `.DropDownListItemActive` class highlights the currently selected item.

---

## 10. Input

### Description

A customizable input field component with a floating label animation. It supports different input types and themes.

### Props

| Prop Name | Type | Description | Default Value |
| :-------- | :--- | :---------- | :------------ |
| `label` | `string` | The label text for the input field. | `undefined` |
| `id` | `string` | A unique identifier for the input element, used for accessibility. | `undefined` |
| `theme` | `string` | Applies a predefined theme ('light', 'dark'). | `'default'` |
| `value` | `string` | The current value of the input field. | `undefined` |
| `onChange` | `(event: React.ChangeEvent<HTMLInputElement>) => void` | Callback function triggered when the input value changes. | `undefined` |
| `type` | `string` | The type of the input element (e.g., 'text', 'password', 'email'). | `'text'` |
| `...rest` | `InputHTMLAttributes<HTMLInputElement>` | Any other standard HTML input attributes. | `undefined` |

### Usage Example

```jsx
import React, { useState } from "react";
import { Input } from "mezmer-ui";

function AppInputs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', padding: '50px', width: '300px' }}>
      <Input
        id="name-input"
        label="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        theme="light"
      />
      <Input
        id="email-input"
        label="Email Address"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        theme="dark"
      />
      <Input
        id="password-input"
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        theme="light"
        placeholder="Enter your password"
      />
    </div>
  );
}
```

### Styling Notes

- Uses CSS Modules (`Input.module.css`) for component-scoped styling.
- The `theme` prop utilizes `ThemeFunctionConponent` to apply `btn-light` or `btn-dark` classes to both the container and the input element, controlling their background, text, and border colors.
- The label (`.legandStyle`) animates to a smaller, elevated position (`.legieng`) when the input is focused or has a value, creating a floating label effect.
- The input field has a subtle border transition on focus.

---

## 11. Modal

### Description

A customizable modal component that displays content in a dialog box, overlaying the rest of the page. It supports different themes and includes a backdrop for focus.

### Props

| Prop Name | Type | Description | Default Value |
| :-------- | :--- | :---------- | :------------ |
| `children` | `ReactNode` | The content to be rendered inside the modal. | `undefined` |
| `theme` | `string` | Applies a predefined theme ('light', 'dark'). | `'default'` |
| `...props` | `HTMLAttributes<HTMLDivElement>` | Any other standard HTML div attributes to be applied to the modal background. | `undefined` |

### Usage Example

```jsx
import React, { useState } from "react";
import { Modal, PlainButton, Text } from "mezmer-ui";

function AppModals() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <PlainButton label="Open Modal" onClick={openModal} theme="dark" />

      {isModalOpen && (
        <Modal theme="light" onClick={closeModal}> {/* Clicking backdrop closes modal */}
          <div style={{ background: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
            <Text type="h3" theme="dark">Modal Title</Text>
            <Text type="p" theme="dark">This is the content of the modal.</Text>
            <PlainButton label="Close" onClick={closeModal} theme="light" style={{ marginTop: '20px' }} />
          </div>
        </Modal>
      )}

      <p style={{ marginTop: '20px' }}>Some content behind the modal.</p>
    </div>
  );
}
```

### Styling Notes

- Uses CSS Modules (`Modal.module.css`) for component-scoped styling.
- The modal background (`.madalbg`) covers the entire viewport, centers the modal, and applies a `backdrop-filter` for a blurred effect.
- The modal content area (`.madal`) is styled with `min-width`, `min-height`, `border-radius`, and uses flexbox for centering its children.
- The `theme` prop utilizes `ThemeFunctionConponent` to apply `btn-light` or `btn-dark` classes to the modal content area, controlling its background and text colors.
- The `.remove` class is used to hide the modal, likely toggled by conditional rendering in the parent component.

---

## 12. PlainButton

### Description

A simple, customizable button component with primary and secondary variants, supporting different themes.

### Props

| Prop Name | Type | Description | Default Value |
| :-------- | :--- | :---------- | :------------ |
| `children` | `ReactNode` | The content to be rendered inside the button (e.g., text, icons). | `undefined` |
| `btntype` | `'primary' \| 'secondary'` | Defines the visual style of the button. `'primary'` for a filled button, `'secondary'` for an outlined (ghost) button. | `'primary'` |
| `btntheme` | `string` | Applies a predefined theme ('light', 'dark'). | `'default'` |
| `...props` | `ButtonHTMLAttributes<HTMLButtonElement>` | Any other standard HTML button attributes. | `undefined` |

### Usage Example

```jsx
import React from "react";
import { PlainButton } from "mezmer-ui";

function AppPlainButtons() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', padding: '50px' }}>
      <PlainButton btntype="primary" btntheme="light" onClick={handleClick}>
        Primary Light
      </PlainButton>
      <PlainButton btntype="secondary" btntheme="dark" onClick={handleClick}>
        Secondary Dark
      </PlainButton>
      <PlainButton btntype="primary" btntheme="dark" onClick={handleClick}>
        Primary Dark
      </PlainButton>
      <PlainButton btntype="secondary" btntheme="light" onClick={handleClick}>
        Secondary Light
      </PlainButton>
    </div>
  );
}
```

### Styling Notes

- Uses CSS Modules (`PlainButton.module.css`) for component-scoped styling.
- The `btntype` prop applies either `.primary` or `.secondary` classes, defining the button's background, text, and border colors.
- The `btntheme` prop utilizes `ThemeFunctionConponent` to apply `btn-light` or `btn-dark` classes, which further customize the button's appearance based on the global theme.
- Includes hover effects for visual feedback, changing background and text colors.
- The `.shadow` and `.scale` classes are available for additional styling, though not directly controlled by props in this example, they can be applied via `className` if needed.

---

## 13. ShadowButton

### Description

A button component that extends `PlainButton` functionality by adding a customizable shadow effect. It supports different button types and themes.

### Props

| Prop Name | Type | Description | Default Value |
| :-------- | :--- | :---------- | :------------ |
| `children` | `ReactNode` | The content to be rendered inside the button (e.g., text, icons). | `undefined` |
| `btntype` | `'primary' \| 'secondary'` | Defines the visual style of the button. `'primary'` for a filled button, `'secondary'` for an outlined (ghost) button. | `'primary'` |
| `btntheme` | `string` | Applies a predefined theme ('light', 'dark'). | `'default'` |
| `shadowColor` | `string` | The color of the shadow. | `'#ffffff'` |
| `spread` | `string` | The spread radius of the shadow (e.g., '5px', '10px'). | `'10px'` |
| `inside` | `boolean` | If `true`, applies an `inset` shadow. | `false` |
| `...props` | `ButtonHTMLAttributes<HTMLButtonElement>` | Any other standard HTML button attributes. | `undefined` |

### Usage Example

```jsx
import React from "react";
import { ShadowButton } from "mezmer-ui";

function AppShadowButtons() {
  const handleClick = () => {
    alert("Shadow Button clicked!");
  };

  return (
    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', padding: '50px' }}>
      <ShadowButton btntype="primary" btntheme="light" onClick={handleClick} shadowColor="#007bff" spread="8px">
        Primary Shadow
      </ShadowButton>
      <ShadowButton btntype="secondary" btntheme="dark" onClick={handleClick} shadowColor="#6c757d" spread="5px" inside>
        Secondary Inset Shadow
      </ShadowButton>
      <ShadowButton btntype="primary" btntheme="dark" onClick={handleClick} shadowColor="#28a745" spread="12px">
        Green Shadow
      </ShadowButton>
    </div>
  );
}
```

### Styling Notes

- Reuses CSS Modules from `PlainButton` (`PlainButton.module.css`) for base button styling (padding, cursor, transitions, border-radius, border).
- The `btntype` prop applies either `.primary` or `.secondary` classes from `PlainButton.module.css`.
- The `btntheme` prop utilizes `ThemeFunctionConponent` to apply `btn-light` or `btn-dark` classes, which further customize the button's appearance based on the global theme.
- Shadow effects are applied inline using the `boxShadow` style property, controlled by `shadowColor`, `spread`, and `inside` props.
- Includes hover effects inherited from `PlainButton` for visual feedback.

---

## 14. Text

### Description

A versatile text component that can render various HTML heading and paragraph elements (`h1` to `h6`, `p`, `span`, `div`). It supports different themes.

### Props

| Prop Name | Type | Description | Default Value |
| :-------- | :--- | :---------- | :------------ |
| `children` | `ReactNode` | The content to be rendered inside the text component. | `undefined` |
| `theme` | `string` | Applies a predefined theme ('light', 'dark'). | `'default'` |
| `textType` | `'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6' \| 'p' \| 'span' \| 'div'` | Specifies the HTML tag to be used for the text element. | `'h1'` |
| `...props` | `HTMLAttributes<HTMLElement>` | Any other standard HTML attributes to be applied to the text element. | `undefined` |

### Usage Example

```jsx
import React from "react";
import { Text } from "mezmer-ui";

function AppTextExamples() {
  return (
    <div style={{ padding: '20px' }}>
      <Text textType="h1" theme="dark">Heading 1 - Dark Theme</Text>
      <Text textType="h2" theme="light">Heading 2 - Light Theme</Text>
      <Text textType="p" theme="dark">
        This is a paragraph of text rendered with the dark theme.
        It demonstrates how to use the Text component for general body content.
      </Text>
      <Text textType="span" theme="light" style={{ fontWeight: 'bold' }}>
        This is a bold span in light theme.
      </Text>
      <Text textType="div" theme="dark">
        <div>This is a div containing other elements.</div>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
        </ul>
      </Text>
    </div>
  );
}
```

### Styling Notes

- Uses CSS Modules (`Text.module.css`) for component-scoped styling.
- The `container` class provides basic padding and flex-wrap properties.
- The `theme` prop utilizes `ThemeFunctionConponent` to apply `btn-light` or `btn-dark` classes, which control the text color based on the global theme.
- The `textType` prop dynamically renders the specified HTML tag, allowing for semantic text structuring.

---
