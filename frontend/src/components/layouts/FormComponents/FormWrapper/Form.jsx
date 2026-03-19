import React from 'react'

import styles from './Form.module.css';


const Form = ({ onSubmit, children, className = '', variant = 'default', ...rest }) => {
    return (
        <form onSubmit={onSubmit}
            className={`${styles.formSection} 
                ${styles[variant]}
            ${className}`}
            {...rest}>
            {children}
        </form>
    )
}

export default Form
