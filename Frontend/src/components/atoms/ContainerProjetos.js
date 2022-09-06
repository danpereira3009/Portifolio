import { Component } from "react";

export default class Button extends Component {
    render() {
        return (

    <div className="border hover:cursor-pointer" onClick={this.props.onClick}>
            <img class="w-[40vw] h-[50vh] hover:scale-105 duration-500" src={this.props.src} alt={this.props.alt}/> 
            {this.props.text}
    </div>

        )
    }
}