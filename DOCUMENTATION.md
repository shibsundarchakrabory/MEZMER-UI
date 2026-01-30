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
      <Alert message="Warning: Some data might be outdated." type="warning" theme="dark" onClose={handleClose} />
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
