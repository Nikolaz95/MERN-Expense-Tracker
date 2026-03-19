import React from 'react'

import styles from './Label.module.css';


const Label = ({ htmlFor, children, className = '', variant, ...rest }) => {
    return (
        <label htmlFor={htmlFor}
            className={` 
                ${styles.labelDefault}
                ${variant ? styles[variant] : ''}
                ${className}`}
            {...rest}>
            {children}
        </label>
    )
}

export default Label
