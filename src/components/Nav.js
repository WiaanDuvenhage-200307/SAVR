import React from 'react';
import Logo from '../assets/Logo.svg';
import SwitchUi from './UI/SwitchUi';

const Nav = () => {
    return (
        <div className='nav'>
            <img src={Logo} width="100px"/> 
            <div className='theme-switch'><SwitchUi/></div>      
        </div>
    );
};

export default Nav;