import { useState } from 'react'
import axios from 'axios'
import InputWithLabel from "../molecules/InputWithLabel"
import TextAreaWithLabel from "../molecules/TextAreaWithLabel"
import ButtonForm from "../atoms/ButtonForm"

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

return (
    
<section className='bg-gradient-to-t from-[#646165] to-blue-800 md:flex justify-evenly pb-6 font-light'>

            <div className="text-white pt-8 md:w-[40vw] relative md:top-24">
                <h1 className="md:text-4xl text-2xl text-center">Entre em contato</h1>
                <h1 className="md:text-2xl text-lg p-6 md:p-0 mt-4 text-justify ">
                    Estou sempre interessado em projetos freelance e oportunidade de trabalho CLT / PJ. <br/>
                    Se você tiver interesse em contratar meus serviços não exite em utilizar o formulário abaixo.
                </h1>
            </div>

            <div className="flex flex-col items-center mt-8">

                <InputWithLabel id="Nome" htmlFor="Nome" text="Nome" placeholder="Digite seu Nome :)" onChange={(e) => {setNome(e.target.value)}}></InputWithLabel>                    
                <InputWithLabel id="E-Mail" htmlFor="E-Mail" text="E-mail" placeholder="Digite seu melhor e-mail :)" onChange={(e) => {setEmail(e.target.value)}}></InputWithLabel>
                <InputWithLabel id="Assunto" htmlFor="Assunto" text="Assunto" placeholder="Conte-me o motivo do seu contato :)" onChange={(e) => {setAssunto(e.target.value)}}></InputWithLabel>
                <TextAreaWithLabel  id="Mensagem" htmlFor="Mensagem" text="Mensagem" placeholder="Deixe sua mensagem :)" onChange={(e) => {setMensagem(e.target.value)}}></TextAreaWithLabel>
                <ButtonForm text="Enviar" onClick={salvarMensagem}/>

            </div>

</section>

    )
}