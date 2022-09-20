import Page1 from "../../../assets/galoa-pagina1.png"
import Page1_Sidebar from "../../../assets/galoa-pagina4Sidebar.png"
import Page2 from "../../../assets/galoa-pagina2.png"
import Page3 from "../../../assets/galoa-pagina3.png"
import ButtonHome from "../../molecules/ButtonHome"
import ImagemProjetos from "../../atoms/ImagemProjetos"


export default () =>

<section className="bg-gray-200">

    <div className="bg-slate-300 flex items-center justify-center w-full">

        <ButtonHome />

        <h1 className="md:text-5xl p-5 text-orange-600 font-bold">Galoa - Landpage</h1>
    </div>

    <div className="gap-4 flex flex-wrap md:flex-row flex-col md:justify-center mt-8">

        <ImagemProjetos src={Page1} alt="imagem da primeira" />
        <ImagemProjetos src={Page1_Sidebar} alt="Imagem da segunda tela" />
        <ImagemProjetos src={Page2} alt="Imagem da segunda tela" />
        <ImagemProjetos src={Page3} alt="Imagem da terceira tela" />

    </div>

</section>