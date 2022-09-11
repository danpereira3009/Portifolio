import Arrow from "../../assets/arrow.svg"
import { Component } from "react";

export default class Arrows extends Component {
    render() {
        return (

<img src={Arrow} alt="arrow" className={`${this.props.className} w-8 h-8 
hover:cursor-pointer duration-300 active:scale-90`} onClick={this.props.onClick}/>

        )
    }
}