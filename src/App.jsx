import React, { useState } from 'react';
import Modal from './components/Modal/Modal';
import ShadowButton from './components/ShadowButton/ShadowButton';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Hello, World!</h1>
      <ShadowButton onClick={openModal} btntype="primary">
        Open Modal
      </ShadowButton>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>This is a Modal!</h2>
        <p>Click outside to close or use a button inside.</p>
        <ShadowButton onClick={closeModal} btntype="secondary">
          Close from inside
        </ShadowButton>
      </Modal>
    </div>
  );
}

export default App;