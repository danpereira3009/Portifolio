import { Component } from "react";
import "../index.css"

export default class Button extends Component {
    render() {
        return (

    <div className="containerProjeto hover:cursor-pointer md:w-[35em] w-[90vw] p-2" onClick={this.props.onClick}>
            <img class="w-[35em] h-[50vh] hover:scale-105 duration-500 rounded-lg" src={this.props.src} alt={this.props.alt}/> 
            {this.props.text}
    </div>

        )
    }
}