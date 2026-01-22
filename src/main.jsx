import React from 'react';
import ReactDOM from 'react-dom/client';
import { PlainButton, Card, ShadowButton } from './index';

import assate1 from "./assets/assate.jpg"
import Input from './components/Input/Input';
// import assate2 from "./assets/assate2.png"

const p = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fuga ipsam unde ratione libero quae repellendus nam rem ducimus, beatae ipsa, odit consectetur! Eius, ducimus quidem deserunt veniam natus nesciunt!"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div style={{width:"100vw", padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems:"center", justifyContent:"center" }}>
      <h1>Mezmer UI Components</h1>
      
      <h2>Buttons</h2>
      
      <h3>Primary</h3>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <PlainButton>Primary</PlainButton>
        <PlainButton btntheme= "light"> THEME LIGHT</PlainButton>
        <PlainButton btntheme= "dark">THEME DARK</PlainButton>

        
      </div>

      <h3>ShadowButton</h3>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <ShadowButton btntheme='light' shadowColor='#51ff00' spread="30px" > shadow button</ShadowButton>
        <ShadowButton btntheme='dark' shadowColor='#ffb6b6' spread='20px' > shadow button</ShadowButton>
        <ShadowButton btntheme='dark' shadowColor='#ff0000' spread='10px' inside= "true" > shadow button</ShadowButton>
        
      </div>
      
      <h3>card</h3>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Card pic={assate1} theme= "light" title="Light theme Card" para={p} ></Card>
        <Card pic={assate1} theme= "dark" title="Dark theme Card" para={p} ></Card>
      </div>
      <h3>Input</h3>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Input icon="true" ></Input>
      </div>
    </div>
  </React.StrictMode>
);
