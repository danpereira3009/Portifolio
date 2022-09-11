import React from "react";
import Whats from "../../atoms/Whats"
import Saudacao from "../../organisms/Saudacao"
import Sidebar from "../../organisms/Sidebar"
import Projetos from "../../organisms/Projetos"
import Contato from "../../organisms/Contato"
import Skills from "../../organisms/Skills"

export default () =>

<section className="bg-gradient-to-t from-gray-500 to-gray-800 overflow-hidden">
    <Sidebar />
    <div className="pl-[100px]">
        <Saudacao />
        <Projetos />
        <Skills />
        <Contato />
        <Whats />    
    </div>
</section>