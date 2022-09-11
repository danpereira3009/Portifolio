import { Component } from "react";

export default class H1Header extends Component {
    render() {
        return (

<div >
    <h1 onClick={this.props.onClick} className="hover:text-red-500 hover:cursor-pointer duration-300 text-white">{this.props.text}</h1>
</div>

        )
    }
}