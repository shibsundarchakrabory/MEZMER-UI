import React from 'react';
import ReactDOM from 'react-dom/client';
import { PlainButton, Card } from './index';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div style={{ padding: '2rem' }}>
      <h1>Mezmer UI Components</h1>
      <h2>Button</h2>
      <PlainButton>Click Me</PlainButton>
      <h2 style={{ marginTop: '2rem' }}>Card</h2>
      <Card style={{ padding: '2rem', border: '1px solid #ccc' }}>
        This is a card.
      </Card>
    </div>
  </React.StrictMode>
);
