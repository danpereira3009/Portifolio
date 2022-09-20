import ContainerProjetos from "../molecules/ContainerProjetos"
import Adopet from "../../assets/adopet.png"
import Galoa from "../../assets/galoa-pagina1.png"
import Amanda from "../../assets/amanda.png"
import { Link } from "react-router-dom"
import Arrow from "../atoms/Arrow"
import { useRef } from 'react'
import "../index.css"

function openAmanda() {
    window.open("https://www.amandaapolinario.com.br/")
}

function CarouselProjetos() {

    const carousel = useRef(null)

    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= 400
    }

    const handleRightClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += 400
    }

    return (

<section className="mb-8 pl-4">

    <div class="carousel flex mb-4 overflow-x-auto scroll-smooth gap-6 mr-4" ref={carousel}>
        <Link to="/adopet"><ContainerProjetos src={Adopet}></ContainerProjetos></Link>
        <Link to=""><ContainerProjetos src={Amanda} onClick={openAmanda}></ContainerProjetos></Link>
        <Link to="/galoa"><ContainerProjetos src={Galoa}></ContainerProjetos></Link>
    </div>

    <div className="flex items-center justify-center gap-4">
        <Arrow onClick={handleLeftClick}/>
        <Arrow onClick={handleRightClick} className="rotate-180" />
    </div>

</section>

        )
}

export default CarouselProjetos