import { Component } from "react";

export default class ImagemProjetos extends Component {
    render() {
        return (
        <img className="mb-2" src={this.props.src} alt={this.props.alt} />
        )
    }  
}