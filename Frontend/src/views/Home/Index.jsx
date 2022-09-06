import React from "react";
import Whats from "../../assets/whats.svg"
import FotoPerfil from "../../assets/foto.png"
import "./index.css"

export default () =>

<section>
    <div className="apresentacao justify-evenly flex">
        
        <img src={FotoPerfil} alt="foto Daniel" className="fotoPerfil"/>
        
        <div className="flex flex-col self-center ">
            <div className="nome mb-10">
                Daniel Pereira <br/>
                Fullstack Dev.
            </div>

            
            <div className="sobre_mim">
                <p className="texto_sobre font-thin">
                Web Developer Fullstack <br/>
                Estudante de Análise de Sistemas - Universidade Anhembi Morumbi<br/>
                Formado em Desenvolvimento Web Front-End - Alura<br/>
                Sou apaixonado por tecnologia e estou constantemente evoluindo minhas habilidades
                </p>
            </div>
        </div>
    </div>

    <a href="https://web.whatsapp.com/send?phone=21984160620" target='_blank'><img src={Whats} alt="ícone whats" className="whats_icon w-16 h-16 fixed bottom-5 right-5 bg-green-600 rounded-full p-4 hover:cursor-pointer active:scale-90"/></a>
        
</section>