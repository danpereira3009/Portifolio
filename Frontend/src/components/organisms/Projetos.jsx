import ContainerProjetos from "../molecules/ContainerProjetos"
import Adopet from "../../assets/adopet.png"
import Amanda from "../../assets/amanda.png"
import { Link } from "react-router-dom"

export default () => 

<section class="carrousel flex md:flex-row flex-col gap-5 items-center justify-center mb-10">
        <Link to="/adopet"><ContainerProjetos src={Adopet}></ContainerProjetos></Link>
        <Link to="/amanda"><ContainerProjetos src={Amanda}></ContainerProjetos></Link>
        <Link to="/amanda"><ContainerProjetos src={Amanda}></ContainerProjetos></Link>
        <Link to="/amanda"><ContainerProjetos src={Amanda}></ContainerProjetos></Link>
        <Link to="/amanda"><ContainerProjetos src={Amanda}></ContainerProjetos></Link>
        <Link to="/amanda"><ContainerProjetos src={Amanda}></ContainerProjetos></Link>
        <Link to="/amanda"><ContainerProjetos src={Amanda}></ContainerProjetos></Link>
</section>
