import React from 'react'
import pepe from './pepe.png'

function Header() {
    return (
    <div className='header'>
        <img src={pepe} alt='pepe' />
        <h1>Meme Generator</h1>        
    </div>
    )
}

export default Header