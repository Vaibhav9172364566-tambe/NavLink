/* eslint-disable no-unused-vars */
import React from 'react'
import viteLogo from '/vite.svg'
import { Link, NavLink } from 'react-router-dom'

import About from './About';
import Contact from './Contact';

function Header() {
  return (
    <header className='flex justify-between hover:bg-gray-500 py-4 px-4 md:px-8 shadow-md' >
        <img src={viteLogo} alt=''></img>
        <ul className='flex gap-4'>
            <li>
            <NavLink className={({isActive})=>{
                if(isActive) return 'underline text-blue-700'
            }} to='/'>Home</NavLink> </li> <li>
            <NavLink className={({isActive})=>{
                if(isActive) return 'underline text-blue-700'
            }} to='/about'>About</NavLink>
            </li>
            <li>
            <NavLink className={({isActive})=>{
                if(isActive) return 'underline text-blue-700'
            }} to='/Contact'>Contact</NavLink>

            </li>
        </ul>
    </header>
  )
}

export default Header