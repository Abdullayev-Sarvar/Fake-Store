import React from 'react'
import { NavLink } from 'react-router-dom'
import './navigation.scss'

const Navigation = () => {
    const token = localStorage.getItem('token');
    const authenticated = !!token;

  return (
    <nav id='navigation'>
            <div className='nav-container'>
                <div className='nav-wrapper'>
                    <NavLink to='/' className='brand-logo'>
                        <img className='logo' src='https://media.licdn.com/dms/image/D4E0BAQG-i2j7Q2WFIA/company-logo_200_200/0/1694593112031/img_logo?e=2147483647&v=beta&t=o1304VK0Zbh3CBA-8_LNYNZZCNrQjMIBS-nwKrAMzbY' alt="Logo" />
                    </NavLink>
                    <ul className='nav-list'>
                        <li className='nav-items'><NavLink to='#about'>About</NavLink></li>
                        <li className='nav-items'><NavLink to='#shop'>Shop</NavLink></li>
                        <li className='nav-items'><NavLink to='#service'>Service</NavLink></li>
                        <li className='nav-items'><NavLink to='#products'>Products</NavLink></li>
                    </ul>
                    <ul className='nav-list'>
                        {authenticated ? (
                            <button className='nav-btn'>
                                <NavLink to='/profile'>Profile</NavLink>
                            </button>
                        ) : (
                            <>
                                <button className='nav-btn'>
                                    <NavLink to='/login'>Login</NavLink>
                                </button>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
  )
}

export default Navigation