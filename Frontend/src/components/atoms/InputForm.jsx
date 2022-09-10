import { Component } from "react";

export default class InputForm extends Component {
    render() {
        return (

        <div className={`${this.props.className} relative p-2 mt-2`}>

            <input id={this.props.id} placeholder={this.props.placeholder} onChange={this.props.onChange}
            className= "peer placeholder-black pl-[86px] focus:pl-2 p-3 rounded-lg focus:placeholder-white focus:bg-white bg-gray-400 duration-500 md:w-[40vw] w-[60vw]"/>

            <label htmlFor={this.props.htmlFor} 
            className="absolute bg-slate-600 text-white p-2 peer-focus:-top-6 top-3 left-3 duration-500 rounded-lg font-bold">
                {this.props.text}
            </label>
        </div>

        )
    }
}