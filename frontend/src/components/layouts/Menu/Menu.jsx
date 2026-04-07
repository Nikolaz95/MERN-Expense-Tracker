import React from 'react'
import Navigation from '../NavigatioLinkComponent/Navigation'
import Image from '../Images/Image'

import "./Menu.css"


const Menu = ({ isOpen, items }) => {
    if (!isOpen) return null
    return (
        <ul className="menuList">
            {items.map((item) => (
                <li key={item.id} className="menuItem">

                    {/* Ako ima path → link */}
                    {item.path && (
                        <Navigation to={item.path} className="menuLink">
                            {item.icon && <Image src={item.icon} variant="headerImg" />}
                            <span>{item.label}</span>
                        </Navigation>
                    )}

                    {/* Ako ima onClick → button (npr. Logout) */}
                    {item.onClick && (
                        <button className="menuButton" onClick={item.onClick}>
                            {item.icon && <Image src={item.icon} variant="headerImg" />}
                            <span>{item.label}</span>
                        </button>
                    )}

                </li>
            ))}
        </ul>
    )
}

export default Menu