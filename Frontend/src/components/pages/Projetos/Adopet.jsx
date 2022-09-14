import Animais from "../../../assets/Animais.png"
import Cadastro from "../../../assets/cadastro.png"
import Login from "../../../assets/adopet.png"
import ImagemProjetos from "../../atoms/ImagemProjetos"
import ButtonHome from "../../molecules/ButtonHome"

export default () =>

<section>

    <div className="bg-slate-300 flex items-center justify-center w-full">

        <ButtonHome />

        <h1 className="text-5xl p-5 text-orange-600 font-bold">Adopet - Site de Adoção de Pets</h1>
    </div>

    <ImagemProjetos src={Login} alt="Imagem da tela de login" />
    <ImagemProjetos src={Cadastro} alt="Imagem da tela de cadastro de animais" />
    <ImagemProjetos src={Animais} alt="Imagem da tela com os animais cadastrados" />


</section>