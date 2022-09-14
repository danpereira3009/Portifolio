import Home from "../../assets/home.svg"

function toHome() {
    window.location.href= "/"
}

export default () =>

<div className="absolute left-2 flex gap-4">
    <img src={Home} onClick={toHome} className="peer w-8 h-8 hover:cursor-pointer self-center hover:scale-110" 
    alt="botão para retornar a Home"/>

    <div className="flex items-center opacity-0 peer-hover:opacity-100 duration-300">
        <div className="border-y-8 border-y-transparent border-r-8 border-r-red-400 h-0 w-0"></div>
        <div className="w-52 text-center self-center p-2 rounded-md bg-red-400 text-white text-xl ">Retornar a Home</div>
    </div>
</div>
