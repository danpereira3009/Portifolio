import React from "react";
import Whats from "../../components/Whats"
import Saudacao from "../../components/Saudacao";
import Sidebar from "../../components/Sidebar";
import Projetos from "../Projetos/Projetos";
import Contato from "../../components/Contato";
import Skills from "../../components/Skills";


export default () =>

<section className="bg-gray-800">
    <Sidebar />
    <div className="pl-[100px] overflow-hidden ">
        <Saudacao />
        <Projetos />
        <Skills />
        <Contato />
        <Whats />    
    </div>
</section>