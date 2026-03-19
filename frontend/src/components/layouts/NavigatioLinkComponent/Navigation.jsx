import React from 'react'
import { NavLink } from 'react-router-dom'
//import css
/* import "./Navigation.css"; */

//import css
import styles from './Navigation.module.css';

const Navigation = ({ to, children, variant = "", className, ...rest }) => {
    return (
        <NavLink to={to} {...rest}
            className={`${styles.default} ${variant ? styles[variant] : ''} ${className}`}>
            {children}
        </NavLink>
    )
}

export default Navigation