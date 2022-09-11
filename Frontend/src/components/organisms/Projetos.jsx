import ContainerProjetos from "../molecules/ContainerProjetos"
import Adopet from "../../assets/adopet.png"
import Amanda from "../../assets/amanda.png"
import { Link } from "react-router-dom"
import Arrow from "../atoms/Arrow"
import { useRef } from 'react'
import "../index.css"

function CarouselProjetos() {

    const carousel = useRef(null)

    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= 500
    }

    const handleRightClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += 500
    }

    return (

<section className="mb-8 pl-4">
    <div class="carousel flex gap-5 mb-4 overflow-x-auto scroll-smooth" ref={carousel}>
        <Link to="/adopet"><ContainerProjetos src={Adopet}></ContainerProjetos></Link>
        <Link to="/amanda"><ContainerProjetos src={Amanda}></ContainerProjetos></Link>
        <Link to="/adopet"><ContainerProjetos src={Adopet}></ContainerProjetos></Link>
        <Link to="/amanda"><ContainerProjetos src={Amanda}></ContainerProjetos></Link>
        <Link to="/adopet"><ContainerProjetos src={Adopet}></ContainerProjetos></Link>
        <Link to="/amanda"><ContainerProjetos src={Amanda}></ContainerProjetos></Link>
        <Link to="/adopet"><ContainerProjetos src={Adopet}></ContainerProjetos></Link>
        <Link to="/amanda"><ContainerProjetos src={Amanda}></ContainerProjetos></Link>
    </div>

    <div className="flex items-center justify-center gap-4">
        <Arrow onClick={handleLeftClick}/>
        <Arrow onClick={handleRightClick} className="rotate-180" />
    </div>
</section>

        )
}

export default CarouselProjetos