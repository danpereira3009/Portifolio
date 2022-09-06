import { Component } from "react";

export default class H1Header extends Component {
    render() {
        return (

<div onClick={this.props.onClick}>
    <h1 className="hover:text-red-500 hover:cursor-pointer duration-300 text-white">{this.props.text}</h1>
</div>

        )
    }
}