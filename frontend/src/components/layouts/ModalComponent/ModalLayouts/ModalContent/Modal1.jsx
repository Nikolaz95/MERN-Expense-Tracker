import React from 'react'


//import css
import "./Modal1.css";

const Modal1 = ({ onClose }) => {
    return (
        <div className="modallContent">
            <button className="closebtnss" onClick={onClose}>
                x
            </button>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, obcaecati consequuntur deleniti magni labore odio saepe, facere facilis impedit fugiat sapiente accusantium quia ea in eius tempora illum sed quaerat ad optio beatae rerum ipsam! Fugiat minima nulla aliquam repudiandae quasi omnis ex quaerat magni, earum placeat numquam suscipit minus.</p>

        </div>
    )
}

export default Modal1
