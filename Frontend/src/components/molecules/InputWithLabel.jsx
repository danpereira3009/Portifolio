import { Component } from "react";
import Label from "../atoms/Label"

export default class InputForm extends Component {
    render() {
        return (

        <div className={`${this.props.className} relative p-2 mt-2`}>

            <input placeholder={this.props.placeholder} onChange={this.props.onChange}
            className="peer placeholder-black pl-[86px] focus:pl-2 p-3 rounded-lg focus:placeholder-white focus:bg-white bg-gray-400 duration-500 md:w-[40vw] w-[80vw]"/>

            <Label text={this.props.text} />
        </div>

        )
    }
}