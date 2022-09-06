import React from "react";
import { Link } from 'react-router-dom'
import Linkedin from '../assets/linkedin.svg'
import Facebook from '../assets/facebook.svg'
import Github from '../assets/git.svg'
import Logo from '../assets/logo.png'
import H1Header from "./atoms/H1Header";
import ButtonHeader from "./atoms/ButtonHeader"
const facebook = 'https://www.facebook.com/profile.php?id=100076455139798';
const linkedin = 'https://www.linkedin.com/in/danielluizpereira87';
const github = 'https://github.com/danpereira3009';

function openNewTab(url) {
    const win = window.open(url, '_blank')
    win.focus()
}

export default () => 

<section className="bg-slate-600 h-[100vh] w-[100px] fixed z-10">

        <div>
            <Link to="/"><img className="hover:cursor-pointer w-32 h-26 bg-slate-500" src={Logo} alt="logo"/></Link>
        </div>

        <div className="text-black font-mono flex flex-col gap-4 items-center justify-center relative top-[10em]">
            <H1Header text="sobre"></H1Header>
            <H1Header text="skills"></H1Header>
            <H1Header text="contato"></H1Header>
        </div>

        <div className="gap-2 flex items-center justify-center relative top-[20em]">
            <ButtonHeader onClick={() => openNewTab(linkedin)} src={Linkedin} alt="linkedin" />
            <ButtonHeader onClick={() => openNewTab(facebook)} src={Facebook} alt="facebook" />
            <ButtonHeader onClick={() => openNewTab(github)} src={Github} alt="github" />
        </div>

</section>