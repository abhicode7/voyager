import './App.css';
import Main from './Main';
import Modal from './Modal';
import { useState, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';


function App() {

  const [showModal, setShowModal] = useState(false);
  const selectedImageRef = useRef(null);


  return (
    <div className="App w-[100%] h-full min-h-[100svh] bg-black">
      <AnimatePresence mode="wait">
      {showModal && <Modal setShowModal={setShowModal} selectedImageRef={selectedImageRef} showModal={showModal} />}
      </AnimatePresence>
      
      <Main setShowModal={setShowModal} showModal={showModal} selectedImageRef={selectedImageRef} />
      
    </div>
  );
}

export default App;
