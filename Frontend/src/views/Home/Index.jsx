import React from "react";
import Whats from "../../components/Whats"
import Saudacao from "../../components/Saudacao";
import Sidebar from "../../components/Sidebar";
import Projetos from "../Projetos/Projetos";
import Contato from "../../components/Contato";


export default () =>

<section className="bg-gray-800 overflow-hidden">
    <Sidebar />
    <div className="ml-[100px]">
        <Saudacao />
        <Projetos />
        <Contato />
        <Whats />    
    </div>
</section>