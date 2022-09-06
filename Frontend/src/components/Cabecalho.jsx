import React from "react";
import { Link } from 'react-router-dom'
import Email from '../assets/gmail.png'
import Linkedin from '../assets/linkedin.png'
import Face from '../assets/facebook.png'
import Git from '../assets/git.svg'
import Logo from '../assets/logo.png'

const facebook = 'https://www.facebook.com/profile.php?id=100076455139798';
const linkedin = 'https://www.linkedin.com/in/danielluizpereira87';
const github = 'https://github.com/danpereira3009';

function openNewTab(url) {
    const win = window.open(url, '_blank')
    win.focus()
}

export default () => 

<section className="flex justify-between shadow-stone-500 border-4 h-16">

    <div className="flex self-center text-lg font-bold ml-4">
        <div className="home mr-4 hover:cursor-pointer hover:text-red-600"><Link to="/">Home</Link></div>
        <div className="ml-4 hover:cursor-pointer hover:text-red-600"><Link to="/projetos">Projetos</Link></div>    
        <div className="ml-4 mr-4 hover:cursor-pointer hover:text-red-600"><Link to="/contato">Contato</Link></div>
    </div>

    <div className="icones flex ml-4">
        <button onClick={() => window.location = 'mailto:danpereira3009@gmail.com'} className="w-10 mr-4 ml-4"><img src={Email} alt="email"/></button>
        <button onClick={() => openNewTab(linkedin)} className="w-10 mr-4 ml-4"><img src={Linkedin} alt="linkedin" /></button>
        <button onClick={() => openNewTab(facebook)} className="w-10 mr-4 ml-4"><img src={Face} alt="facebook" /></button>
        <button onClick={() => openNewTab(github)} className="w-10 mr-4 ml-4"><img src={Git} alt="facebook" /></button> 
    </div>

</section>