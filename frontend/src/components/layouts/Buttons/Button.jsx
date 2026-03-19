import React from 'react'

//import css
import styles from './Button.module.css';

const Button = ({ children, onClick, variant = "", title,
    size = "", icon, iconPosition = "right",
    active = false, disabled = false, className = "", iconSize = "iconSmall" }) => {

    const iconWrapper = icon && (
        <span className={`${styles.iconWrapper} ${styles[iconSize]}`}>
            <img src={icon} alt="btnIconImg" title={title} className={styles.btnIconDef} />
        </span>
    );
    return (
        <button onClick={onClick}
            disabled={disabled}
            className={`${styles.btnDefault} ${styles[variant]} ${styles[size]} ${active ? styles.active : ""} ${disabled ? styles.disabled : ""} ${className}`}>
            {iconPosition === "left" && iconWrapper}
            {children}
            {iconPosition === "right" && iconWrapper}
        </button>
    )
}

export default Button