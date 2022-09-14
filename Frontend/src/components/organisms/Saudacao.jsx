import "../../App.css"
import gsap from "gsap"
import { useRef, useEffect } from "react"

function Saudacao() {

    const el = useRef()
    const q = gsap.utils.selector(el);
    
    useEffect(() => {
        gsap.to(q(".box"), {
            x: -1550,
            duration: 3,
          });
        });

    return (
        
<section ref={el} className="h-[30em] md:text-left text-white relative top-12 left-[100em] font-light">

    <div className="">
        <h1 className="box md:text-6xl text-3xl">Olá, Meu nome é <span className="font-bold">D</span>aniel <br/> <i>web developer</i> </h1>
    </div>

    <div className="mt-16">
        <h1 className="box md:text-4xl text-3xl">Este é meu portifólio</h1>
        <h2 className="box pt-4 md:text-2xl text-lg md:max-w-[25em] max-w-[15em] text-justify">Uma pequena amostra dos projetos que trabalhei, juntamente com uma equipe incrível formada por pessoas de todo Brasil.</h2>
    </div>

</section>

    )
}

export default Saudacao;
