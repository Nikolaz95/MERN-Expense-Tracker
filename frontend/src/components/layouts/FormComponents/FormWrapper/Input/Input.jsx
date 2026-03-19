import React from 'react'

import styles from './Input.module.css';

const Input = ({ id, name = '', type = "text", placeholder, className = '', variant, ...rest }) => {
    return (
        <input id={id} type={type} name={name}
            placeholder={placeholder}
            className={` 
                ${styles.inputDefault} 
                ${variant ? styles[variant] : ''}
                ${className}`}
            {...rest} />
    )
}

export default Input
