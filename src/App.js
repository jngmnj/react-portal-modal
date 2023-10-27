import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Modal from './Modal';


const modalWapperStyle = {
  position: 'relative',
  zIndex: 1
}

const higherIndexWrapperStyle = {
  position: 'relative',
  zIndex: 2,
  backgroundColor: 'blue',
  padding: '10px'
}

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <div onClick={() => console.log("clicked")}>
      <div style={modalWapperStyle}>
        <button onClick={() => setIsModalOpen(true)}>모달열기</button>
        {/* 모달 */}
        {isModalOpen && (
          <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
            모달내용
          </Modal>
        )}
      </div>
      <div style={higherIndexWrapperStyle}>Z-index 2</div>
    </div>
  );
}

export default App;
