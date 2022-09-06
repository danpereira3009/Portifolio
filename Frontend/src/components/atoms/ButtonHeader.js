import { Component } from "react";

export default class ButtonHeader extends Component {
    render() {
        return (

<div>
    <button 
        className=""
        onClick={this.props.onClick}>
            <img src={this.props.src} alt={this.props.alt} />
    
    </button>
</div>

        )
    }
}