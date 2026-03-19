import React, { useEffect } from 'react'
import ModalOverlay from './ModalLayouts/ModalOverlay/ModalOverlay'
import styles from './Modal.module.css';



const Modal = ({ children, isOpen, onClose, variant = '', className = '' }) => {
    // Close modal on `Esc` key press
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        };
        if (isOpen) {
            document.addEventListener("keydown", handleKeyDown);
            // Prevent scrolling when modal is open
            document.body.style.overflow = "hidden";
        } else {
            // Restore scrolling when modal is closed
            document.body.style.overflow = "auto";
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "auto"; // Clean up on unmount
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;
    return (
        <ModalOverlay onClose={onClose}>
            <section
                className={`${styles.defaultModal} ${variant ? styles[variant] : ''}`}
                onClick={(e) => e.stopPropagation()}>
                {children}
            </section>
        </ModalOverlay>
    )
}

export default Modal
