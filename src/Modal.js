import React, { useState, useEffect, useRef } from "react";
import images from "./images";
import { motion, AnimatePresence, transform } from 'framer-motion';


function Modal({ showModal, setShowModal, selectedImageRef }) {

    const image = selectedImageRef.current;
    const modalRef = useRef(null);

    useEffect(() => {
        // Disable background scrolling when the modal is open
        document.body.style.overflow = 'hidden';

    
        return () => {
          // Enable background scrolling when the modal is closed
          document.body.style.overflow = 'auto';
        };
      }, []);

      useEffect(() => {
        if (showModal) {
           

            const handleEscape = (event) => {
                if (event.key === 'Escape') {
                    setShowModal(false);
                }
            };

            const handleOutsideClick = (e) => {

                if (modalRef.current && !modalRef.current.contains(e.target)) {
                setShowModal(false);
                }
            }

            document.addEventListener('keydown', handleEscape);
            document.addEventListener('mousedown', handleOutsideClick);

            // Cleanup both event listeners when modal closes
            return () => {
                document.removeEventListener('keydown', handleEscape);
                document.removeEventListener('click', handleOutsideClick);
               
            };
        }
    }, [showModal]);
      

    return (
        
        <div className="overlay fixed w-[100%] h-[100svh] min-h-[100svh] bg-black bg-opacity-[90%] z-[100] flex justify-center items-center">
            
            <div ref={modalRef} className="modal relative popup-content w-[60%] h-[80%] rounded-[10px] flex flex-row items-center overflow-hidden">
            <h2 className="text-white font-bold text-3xl absolute top-0 right-0 cursor-pointer" onClick={() => setShowModal(false)}>x</h2>
                <div className="flex flex-col items-center justify-center w-[60%] h-full bg-gray-900 bg-opacity-[60%] p-4">
                    <img src={image.imageUrl} alt={image.imageUrl}  className="w-full h-auto"></img>
                    </div>
                <div className="flex flex-col items-center justify-center w-[40%] h-full text-white bg-gray-900 gap-4 p-4">
                <h1 className="text-white font-bold text-3xl">{image.generator}</h1>
                <p>{image.prompt}</p>
                </div>
            </div>

        </div>
        
    );


}

export default Modal