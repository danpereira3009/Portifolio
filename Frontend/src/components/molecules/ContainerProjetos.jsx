import { Component } from "react";
import "../index.css"

export default class Button extends Component {
    render() {
        return (

    <div className="item hover:cursor-pointer md:w-[35em]" onClick={this.props.onClick}>
            <img class="md:w-[35em] md:h-[50vh] w-[70vw] hover:scale-105 duration-500" src={this.props.src} alt={this.props.alt}/> 
            {this.props.text}
    </div>

        )
    }
}