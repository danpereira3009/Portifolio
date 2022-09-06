import { Component } from 'react'

export default class Contato extends Component {
    render() {
        return (

<section className='contato flex justify-center bg-neutral-600 h-screen'>
        <div className="flex flex-col p-6">
            <div>
                <h1 className='text-4xl text-center text-red-600 font-bold'>Entre em contato</h1>
                <h1 className="font-serif text-2xl text-white text-justify p-4 w-[30em]">
                    Estou sempre interessado em projetos freelance - especialmente projetos ambiciosos.
                    Contudo se você tiver dúvidas ou sugestões não exite em utilizar o formulário.
                </h1>
            </div>

            <div className='flex-col flex'>
                <div>
                    <input class="w-[25em] bg-[#DBDBDB] m-2 rounded p-4 uppercase text-sm" type="text" placeholder="Nome"></input>
                    <input class="w-[25em] bg-[#DBDBDB] m-2 rounded p-4 uppercase text-sm" type="email" required placeholder="e-mail"></input>
                </div>

                <input class="w-[51.1em] bg-[#DBDBDB] m-2 rounded p-4 uppercase text-sm" type="text" placeholder="Assunto"></input>
                <input class="w-[51.1em] bg-[#DBDBDB] m-2 rounded p-4 uppercase text-sm" type="text" placeholder="Mensagem"></input>
                
            </div>

            <button 
            type='submit'
            className="
            mt-6 
            mr-2 
            w-40 
            h-14 
            self-center 
            text-xl 
            text-white
            shadow-white
            hover:bg-red-200 
            hover:text-black
            rounded-xl 
            shadow-sm 
            font-bold 
            hover:scale-105 
            active:scale-95 
            duration-500 
            hover:duration-500">Enviar</button>

        </div>
</section>
        )
   }
}

