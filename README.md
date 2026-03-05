# Mezmer-UI 🌌

**Mezmer-UI** is a modern, lightweight, and highly customizable React component library designed for building sleek, responsive user interfaces with ease. Built with TypeScript and powered by CSS Modules, it offers a collection of professional-grade components that are easy to integrate and style.

[![npm version](https://img.shields.io/npm/v/mezmer-ui.svg)](https://www.npmjs.com/package/mezmer-ui)
[![license](https://img.shields.io/npm/l/mezmer-ui.svg)](https://github.com/shibsundarchakrabory/MEZMER-UI/blob/main/LICENSE)

---

## ✨ Features

- **🚀 Performance-First**: Lightweight components with minimal overhead.
- **🎨 Customization**: Themed through design tokens and CSS variables.
- **🛡️ Type-Safe**: Fully written in TypeScript for a superior developer experience.
- **🧩 Modular**: Import only what you need.
- **📱 Responsive**: Designed to look great on any screen size.

---

## 📦 Installation

Install Mezmer-UI using your favorite package manager:

```bash
npm install mezmer-ui
# or
yarn add mezmer-ui
# or
pnpm add mezmer-ui
```

---

## 🚀 Quick Start

Import and start using components in your React application:

```tsx
import { PlainButton, Card, Text } from 'mezmer-ui';

function App() {
  return (
    <Card 
      title="Welcome to Mezmer-UI" 
      para="Start building amazing interfaces today!"
    >
      <Text textType="p">This is a typography component.</Text>
      <PlainButton btntype="primary" onClick={() => console.log('Clicked!')}>
        Get Started
      </PlainButton>
    </Card>
  );
}
```

---

## 🛠️ Components Overview

Mezmer-UI comes packed with a variety of essential components:

| Component | Description |
| :--- | :--- |
| **Alert** | Important feedback messages (Success, Error, Warning, Info). |
| **Card** | Flexible content container with image support. |
| **Checkbox** | Interactive selection control. |
| **Container** | Flexible layout container (Row/Column). |
| **DropDown** | Customizable selection menus. |
| **Input** | Styled text fields with floating labels. |
| **Modal** | Overlay dialogs for focused interactions. |
| **PlainButton** | Standard interactive buttons. |
| **ShadowButton** | Buttons with custom glowing shadow effects. |
| **Spinner** | Loading state indicators (Small, Medium, Large). |
| **Tabs** | Navigational component for switching views. |
| **Text** | Versatile typography (H1-H6, P, Span). |
| **Tooltip** | Hoverable information popups. |
| **Radio** | Standard radio input group support. |

---

## 🎨 Theming

Mezmer-UI uses a token-based system for consistent styling. Most components accept a `theme` prop to toggle between variants (e.g., `default`, `dark`).

You can customize global styles by overriding the CSS variables defined in your project or by providing custom values to components like `ShadowButton`:

```tsx
<ShadowButton shadowColor="#ff00ea" spread="15px">
  Mezmerizing Glow
</ShadowButton>
```

---

## 📖 Documentation

For detailed prop definitions and advanced usage, check out our [full documentation](https://github.com/shibsundarchakrabory/MEZMER-UI/blob/main/DOCUMENTATION.md).

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve Mezmer-UI, please check out our [Development Guide](https://github.com/shibsundarchakrabory/MEZMER-UI/blob/main/DEVELOPMENT.md).

1. Fork the repository.
2. Create your feature branch.
3. Commit your changes.
4. Push to the branch.
5. Open a Pull Request.

---

## 📄 License

Mezmer-UI is licensed under the [ISC License](https://github.com/shibsundarchakrabory/MEZMER-UI/blob/main/LICENSE).

Created with ❤️ by [shibsundar chakraborty](https://github.com/shibsundarchakrabory)
