import { Component } from "react";

export default class Button extends Component {
    render() {
        return (

    <div className="border hover:cursor-pointer w-[25vw] h-[50vh]" onClick={this.props.onClick}>
            <img class="w-[25vw] h-[50vh] hover:scale-105 duration-500" src={this.props.src} alt={this.props.alt}/> 
            {this.props.text}
    </div>

        )
    }
}