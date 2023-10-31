import React, { useState } from "react";
import Modal from 'react-modal';
import htp from '../Wordle-Instructions2.jpg';



const modalStyle = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'none',
    border: 'none',
  },
};

export default function HowToPlay() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button style={{
         position: 'absolute',
         top: '15px',
         right: '120px',
         backgroundColor: 'white',
         color: 'black', 
         border: 'none',
         cursor: 'pointer',
         padding:'8px',
         zIndex: 1, 
         borderRadius:'20px'
      }} onClick={openModal}>How to play?</button>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        style={modalStyle}
      >
        <div style={{ position: 'relative' }}>
          <img
            src={htp}
            width={400}
            height={350}
            alt="How To Play"
            style={{ zIndex: 0 }} 
          />
          <button
            style={{
              position: 'absolute',
              top: '8px',
              right: '8px',
              backgroundColor: 'white',
              color: 'black', 
              border: 'none',
              cursor: 'pointer',
              padding:'8px',
              zIndex: 1, 
              borderRadius:'20px'
            }}
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
}


