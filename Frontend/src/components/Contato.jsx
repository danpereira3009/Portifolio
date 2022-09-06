import { useState } from 'react'
import ButtonSend from "./atoms/ButtonSend"
import axios from 'axios'

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
    
<section className='contato flex justify-center bg-neutral-600 h-screen'>
    <div className="flex flex-col p-6">
        <div>
            <h1 className='text-4xl text-center text-white font-bold'>Entre em contato</h1>
            <h1 className="font-serif text-2xl text-white text-justify p-4 w-[30em]">
                Estou sempre interessado em projetos freelance, especialmente projetos ambiciosos.
                Se você tiver dúvidas ou sugestões não exite em utilizar o formulário abaixo.
            </h1>
        </div>

        <div className='flex-col flex'>
            <div>
                <input class="w-[25em] bg-[#DBDBDB] m-2 rounded p-4 uppercase text-sm" type="text" placeholder="Nome" onChange={(e) => {setNome(e.target.value)}}></input>
                <input class="w-[25em] bg-[#DBDBDB] m-2 rounded p-4 uppercase text-sm" type="email" required placeholder="e-mail" onChange={(e) => {setEmail(e.target.value)}}></input>
            </div>

            <input class="w-[51.1em] bg-[#DBDBDB] m-2 rounded p-4 uppercase text-sm" type="text" placeholder="Assunto" onChange={(e) => {setAssunto(e.target.value)}}></input>
            <textarea class="w-[51.1em] bg-[#DBDBDB] m-2 rounded p-4 uppercase text-sm" type="text" placeholder="Mensagem" onChange={(e) => {setMensagem(e.target.value)}}></textarea>
            
        </div>

        <ButtonSend text="Enviar" onClick={salvarMensagem}/>

    </div>
</section>
)
}