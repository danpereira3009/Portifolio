import { Component } from "react";

export default class ButtonHeader extends Component {
    render() {
        return (

<div>
    <button 
        className="hover:scale-110 duration-300 mr-2"
        onClick={this.props.onClick}>
            <img src={this.props.src} alt={this.props.alt} />
    
    </button>
</div>

        )
    }
}