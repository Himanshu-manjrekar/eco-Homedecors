import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = ({to, page}) => {
    return (
        <>
            <li className="nav-item">
                <NavLink exact to={to} className="nav-link" activeStyle={{color: "#BB7a40"}}>
                    {page}
                </NavLink>
            </li>
        </>
    )
}

export default NavItem
