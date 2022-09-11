import React from "react";


export default () =>

<section className="pb-4">

    <h1 className="text-white shadow-sm text-5xl font-bold text-center">Habilidades e Experiências</h1>
    
    <div className="flex flex-col md:flex-row justify-center m-6 text-xl">
        
        <div className="md:w-[50vw] mr-4 mb-8 md:mb-0">
            <h2 className="text-white text-justify font-light">Desde que comecei minha jornada com desenvolvimento web, venho adquirindo experiência 
            com a criação de sites rápidos e responsivos, faceis de usar e construídos com as melhores práticas.
            Atuei como desenvolvedor Front End por 5 meses na empresa Pra Gente, período em que aprendi muito e desenvolvi minhas habilidades 
            através da criação de alguns web sites e e-commerces que você pode conferir acima.
            </h2>
        </div>
        
        <div className="md:w-[50vw] sm:ml-4 text-white flex flex-col md:gap-4">    
            <h1 className="mb-4"><span className="text-[#ed254e] font-bold text-2xl">Habilidades Front End:</span> HTML5, CSS3, JavaScript, ReactJS, Svelte, Tailwind, SASS, GSap</h1>
            <h1><span className="text-[#ed254e] font-bold text-2xl">Habilidades Back End:</span> NodeJS, Express, MongoDB, SQL</h1>
        </div>
    
    </div>
</section>
