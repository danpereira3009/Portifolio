import { Component } from "react";
import "../index.css"

export default class ContainerProjeto extends Component {
    render() {
        return (

    <div className="scroll-area hover:cursor-pointer md:w-[35em] w-[20em]" onClick={this.props.onClick}>
            <img class="w-[35em] h-[20em] hover:scale-105 duration-500 rounded-lg" src={this.props.src} alt={this.props.alt}/> 
            {this.props.text}
    </div>

        )
    }
}