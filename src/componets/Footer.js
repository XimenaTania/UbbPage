import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <ul>
                    <li className='nav-item'>
                        <a href='/'>INICIO</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about'>QUIENES SOMOS</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#testimonials'>OBJETIVO</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#demo'>CONTACTANOS</a>
                    </li>
                </ul>
                <div className='bottom'>
                    <span className='line'></span>
                    <p>2023 UBB, Union Bautista Boliviana</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
