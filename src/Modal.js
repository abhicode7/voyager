import React, { useState, useEffect, useRef } from "react";
import images from "./images";
import { motion, AnimatePresence, transform } from 'framer-motion';
import { modalVariants, overlayVariants } from "./animationVariants";


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
        
        <motion.div
        variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        
        className="overlay fixed w-[100%] h-[100svh] min-h-[100svh] bg-black bg-opacity-[90%] z-[100] flex justify-center items-center">
            
            <motion.div ref={modalRef} 
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"

            className="modal relative popup-content flex-col w-[90%] h-[70%] lg:w-[60%] lg:h-[80%] rounded-[10px] flex lg:flex-row items-center overflow-hidden">
            <h2 className="text-white font-bold text-3xl absolute top-2 right-4 cursor-pointer" onClick={() => setShowModal(false)}>x</h2>
                <div className="flex flex-col items-center justify-center w-full h-[40%] lg:w-[60%] lg:h-full bg-gray-900 bg-opacity-[60%] p-4 object-cover">
                    <img src={image.imageUrl} alt={image.imageUrl}  className="object-contain w-full h-full"></img>
                    </div>
                <div className="flex flex-col items-center w-full lg:w-[40%] lg:h-full h-[60%] text-white bg-gray-900 gap-4 px-4 py-8 overflow-auto">
                <h1 className="text-white font-bold text-xl mb-2 mt-0 lg:mt-8">Prompt</h1>
                <p>{image.prompt}</p>
                <h1 className="text-white font-bold text-xl mb-2 mt-0 lg:mt-8">Negative Prompt</h1>
                <p>{image.nprompt}</p>
                <h1 className="text-white font-bold text-xl mb-2 mt-0 lg:mt-8">Generator</h1>
                <p>{image.generator}</p>
                </div>
            </motion.div>
         

        </motion.div>
        
    );


}

export default Modal