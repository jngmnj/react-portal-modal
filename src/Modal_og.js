import React from 'react'

const modalStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: '#fff',
    borderRadius: '16px',
    border: '1px solid #eee',
    padding: '50px',
    zIndex: 1000
}

const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
}

const Modal = ({ open, onClose, children }) => {
  if(!open) return null; // false면

  return (
    <>
      <div style={overlayStyle} />
      <div style={modalStyle}>
        <p>{children}</p>
        <button onClick={onClose}>모달 닫기</button>
      </div>
    </>
  );
}

export default Modal