import React from 'react'
import logo from './assets/logo.svg'
import profile from './assets/profile.svg'
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <div className="header_left">
            <img src={logo} />
            <h3>Intugine</h3>
            </div>
            <div className="header_right">            
            <h3>Home</h3>
            <h3>Brands</h3>
            <h3>Transporters</h3>
            <h3><img  src={profile}/></h3>
            </div>
        </div>
    )
}

export default Header
