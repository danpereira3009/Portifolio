import { useState } from 'react'
import ButtonSend from "./atoms/ButtonSend"
import axios from 'axios'
import InputForm from './atoms/InputForm'
import TextAreaForm from './atoms/TextAreaForm'

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
    
<section className='bg-gradient-to-t from-blue-200 to-blue-900 h-screen flex justify-center'>

    <div>

        <div className="text-white mt-8">
            <h1 className="text-3xl text-center">Entre em contato</h1>
            <h1 className="text-lg font-serif mt-4 text-center">
                Estou sempre interessado em projetos freelance e oportunidade de trabalho CLT / PJ. <br/>
                Se você tiver interesse em contratar meus serviços não exite em utilizar o formulário abaixo.
            </h1>
        </div>

        <div className="mt-8 flex flex-col justify-center items-center">        
            <div className="flex">
                <InputForm id="Nome" htmlFor="Nome" text="Nome" className="w-[25vw]" placeholder="Digite seu Nome :)" onChange={(e) => {setNome(e.target.value)}}></InputForm>                    
                <InputForm id="E-Mail" htmlFor="E-Mail" text="E-mail" className="w-[25vw]" placeholder="Digite seu melhor e-mail :)" onChange={(e) => {setEmail(e.target.value)}}></InputForm>
            </div>

            <InputForm id="Assunto" htmlFor="Assunto" text="Assunto" className="w-[51.5vw]" placeholder="Conte-me o motivo do seu contato :)" onChange={(e) => {setAssunto(e.target.value)}}></InputForm>
            <TextAreaForm  id="Mensagem" htmlFor="Mensagem" text="Mensagem" className="w-[51.5vw] " placeholder="Deixe sua mensagem :)" onChange={(e) => {setMensagem(e.target.value)}}></TextAreaForm>
            
            <ButtonSend text="Enviar" onClick={salvarMensagem}/>
        </div>


    </div>

</section>

    )
}