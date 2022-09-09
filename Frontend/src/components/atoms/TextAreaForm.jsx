import { Component } from "react";

export default class InputForm extends Component {
    render() {
        return (

        <div className="relative p-2 mt-2">

            <textarea id={this.props.id} placeholder={this.props.placeholder} onChange={this.props.onChange} cols="6" rows="6"
            className={`${this.props.className} peer placeholder-black focus:pl-2 p-2 pl-24 rounded focus:placeholder-white focus:bg-white bg-gray-400 duration-500`} />

            <label htmlFor={this.props.htmlFor} 
            className="absolute bg-slate-600 text-white p-2 peer-focus:-top-6 top-0 left-0 duration-500 rounded font-bold">
                {this.props.text}
            </label>
        </div>

        )
    }
}