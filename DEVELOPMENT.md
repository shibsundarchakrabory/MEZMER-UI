# How to See Live Changes While Developing

There are two primary workflows for developing components in this library and seeing your changes live. Which one you choose depends on your goal.

---

### Workflow 1: Fast, Isolated Development (Recommended)

Use this workflow when you are creating a new component or making significant changes to an existing one. It lets you see your changes instantly without needing a separate project.

1.  **Run the Demo App**
    In your terminal, run this command in the `MEZMER-UI` directory:
    ```bash
    npm run dev:app
    ```

2.  **Open the Demo Page**
    This command starts a local development server. Open the URL it provides (usually `http://localhost:5173`) in your browser. You will see the page rendered from `src/main.jsx`.

3.  **Add Your Component to the Demo**
    Open the file `src/main.jsx` in your code editor. Add the component you are working on to this file so you can see it and interact with it.

4.  **Code and Save**
    When you make changes to your component's file (e.g., `src/components/Input/Input.jsx`) and save, the web page will update automatically in milliseconds. This is called Hot Module Replacement (HMR) and is the fastest way to build and style your components.

---

### Workflow 2: Integration Testing in a Real Project

Use this workflow when you want to see how your components look and behave inside another application that uses your library (e.g., `MEZMER-UI_applied_test`).

1.  **Build & Watch Your Library**
    In a terminal, navigate to the `MEZMER-UI` directory and run:
    ```bash
    npm run dev
    ```
    This command builds your library into the `dist` folder and then watches for any file changes, rebuilding it automatically. **Leave this terminal running in the background.**

2.  **Link Your Library**
    Open a **new** terminal window. In this new terminal, navigate to the `MEZMER-UI` directory again and run:
    ```bash
    npm link
    ```
    This makes your library available globally on your machine for linking.

3.  **Connect Your Test Project**
    In the same (second) terminal, navigate to your other project's directory (e.g., `MEZMER-UI_applied_test`) and run:
    ```bash
    npm link mezmer-ui
    ```
    This creates a symbolic link in your test project's `node_modules` folder that points to your local `MEZMER-UI` project.

4.  **Import the CSS**
    In your test project's main JavaScript or TypeScript file (e.g., `App.jsx` or `main.jsx`), make sure you add this import statement once to include all the necessary styles:
    ```javascript
    import 'mezmer-ui/dist/style.css';
    ```

5.  **Run Your Test Project**
    Start the development server for your test project as you normally would (e.g., `npm run dev`). You can now import and use the components from `mezmer-ui`. When you change the source code in the `MEZMER-UI` project, it will be rebuilt automatically. You will just need to **refresh the browser** on your test project to see the updates.
