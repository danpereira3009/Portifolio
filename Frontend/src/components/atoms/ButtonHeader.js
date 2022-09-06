import { Component } from "react";

export default class ButtonHeader extends Component {
    render() {
        return (

<div>
    <button onClick={this.props.onClick}><img src={this.props.src} alt={this.props.alt} /></button>
</div>

        )
    }
}