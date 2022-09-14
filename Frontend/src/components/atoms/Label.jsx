import { Component } from "react";

export default class InputForm extends Component {
    render() {
        return (

<label className="absolute bg-slate-600 text-white p-2 peer-focus:-top-6 top-3 left-3 duration-500 rounded-lg font-bold">
        {this.props.text}
</label>

        )
    }
}