import React from 'react';
import './Header.css';
import punkLogo from '../assets/header/cryptopunk-logo.png'
import searchIcon from '../assets/header/search.png'
import themeSwitchIcon from '../assets/header/theme-switch.png'


const Header=()=>{
    return (
    <div className='header'>

        <div className='logoContainer'>
            <img src={punkLogo} className='punkLogo' alt="Logo" ></img>
        </div>
    
        <div className='searchBar'>
            <div className='searchIconContainer'>
                <img src={searchIcon} alt='search'></img>
            </div>
            <input className='searchInput' placeholder='Collection, item or user...'></input>
        </div>

        <div className='headerItems'>
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
        </div>

        <div className='headerAction'>
            <div className='themeSwitchContainer'>
                <img src={themeSwitchIcon} alt='theme icon'></img>
            </div>
        </div>

        <div className='loginButton'>
            GET IN
        </div>


    </div>


    )
}

export default Header