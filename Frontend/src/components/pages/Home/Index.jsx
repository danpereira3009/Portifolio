import React from "react";
import Whats from "../../atoms/Whats"
import Saudacao from "../../organisms/Saudacao"
import Sidebar from "../../organisms/Sidebar"
import Projetos from "../../organisms/Projetos"
import Contato from "../../organisms/Contato"
import Skills from "../../organisms/Skills"
import { useRef } from "react"

function Home() {

    const top = useRef(null)

    const handleClickToTop = (e) => {
    e.preventDefault();
    top.current.scrollLeft = top.current.scrollIntoView({behavior: "smooth"})
}

return (
        
<section className="bg-gradient-to-t from-gray-500 to-gray-800 overflow-hidden">
    <Sidebar onClick={handleClickToTop} />
    <div className="md:pl-[100px]" ref={top}>
        <Saudacao />
        <Projetos />
        <Skills />
        <Contato />
        <Whats />    
    </div>
</section>

    )
}

export default Home