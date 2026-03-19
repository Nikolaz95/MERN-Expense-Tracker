import React from 'react'

//import css
import styles from './Image.module.css';


const Image = ({ src, alt, variant, onClick, onLoad, className = '', title, ...props }) => {
    return (
        <img src={src} alt={alt} onClick={onClick} title={title} onLoad={onLoad}
            className={`${styles.imgDefault} ${variant ? styles[variant] : ''} ${className}`}
            {...props}
        />
    )
}

export default Image