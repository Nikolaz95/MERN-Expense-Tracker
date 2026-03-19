import React from 'react'
import styled from "styled-components"
import ReactDOM from "react-dom";

const ModalOverlays = styled.section`
 position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;


const ModalOverlay = ({ children, onClose }) => {
    return ReactDOM.createPortal(
        <ModalOverlays onClick={onClose}>
            {children}
        </ModalOverlays>,
        document.body
    );
}

export default ModalOverlay;
