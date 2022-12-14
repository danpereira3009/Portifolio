import { useState } from 'react'
import axios from 'axios'
import InputWithLabel from "../molecules/InputWithLabel"
import TextAreaWithLabel from "../molecules/TextAreaWithLabel"
import ButtonForm from "../atoms/ButtonForm"
import gsap from "gsap"
import { useRef, useEffect } from "react"
import ScrollTrigger from 'gsap/ScrollTrigger';

export default () => { 

const [nome, setNome] = useState("")
const [email, setEmail] = useState("")
const [assunto, setAssunto] = useState("")
const [mensagem, setMensagem] = useState("")

function salvarMensagem() {

    const contato = {
        nome: nome,
        email: email,
        assunto: assunto,
        mensagem: mensagem
    }

    axios.post('http://localhost:3000/mensagem', contato)
    .then(_ => {
        alert("Mensagem enviada com sucesso")
    })
    .catch(error => {
        alert(error.response.data.mensagem)
    })
}

    const el = useRef(null)
    const q = gsap.utils.selector(el);
    
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(q(".container_"), {
            scrollTrigger: {
                trigger: ".trigger",
                start: "top center",
                // toggleActions: "none none none none",
            },
            y: "-100%",
            duration: 3,
            ease: "back",            
          });
        }, []);

return (
    
<section ref={el} className='bg-gradient-to-t from-[#646165] to-blue-800 md:flex justify-evenly pb-6 font-light'>

    <div className=" text-white pt-8 md:w-[40vw] relative md:top-24">
        <h1 className="trigger md:text-4xl text-2xl text-center">Entre em contato</h1>
        <h1 className="md:text-2xl text-lg p-6 md:p-0 mt-4 text-justify ">
            Estou sempre interessado em projetos freelance e oportunidade de trabalho CLT / PJ. <br/>
            Se você tiver interesse em contratar meus serviços não exite em utilizar o formulário abaixo.
        </h1>
    </div>

    <div className="container_ flex flex-col items-center relative -bottom-[35em] mb-20">

        <InputWithLabel text="Nome" placeholder="Digite seu Nome :)" onChange={(e) => {setNome(e.target.value)}}></InputWithLabel>                    
        <InputWithLabel text="E-mail" placeholder="Digite seu melhor e-mail :)" onChange={(e) => {setEmail(e.target.value)}}></InputWithLabel>
        <InputWithLabel text="Assunto" placeholder="Conte-me o motivo do seu contato :)" onChange={(e) => {setAssunto(e.target.value)}}></InputWithLabel>
        <TextAreaWithLabel text="Mensagem" placeholder="Deixe sua mensagem :)" onChange={(e) => {setMensagem(e.target.value)}}></TextAreaWithLabel>
        <ButtonForm text="Enviar" onClick={salvarMensagem}/>

    </div>

</section>

    )
}