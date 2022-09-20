import { useState } from "react";


function ImagemProjetos(props) {

        const [themeClass, setThemeClass] = useState("notClicked")

        const handleClick = () => {
            if(themeClass === "notClicked"){
                setThemeClass("clicked")
            } else
            setThemeClass("notClicked")
        }

        return (
        <img onClick={handleClick} className={themeClass} src={props.src} alt={props.alt} />
        )
    } 

export default ImagemProjetos