import { Component } from "react";

export default class Button extends Component {
    render() {
        return (

<button type='submit' 
onClick={this.props.onClick}
className="
mt-6 
mr-2 
w-40 
h-14 
self-center 
text-xl 
text-white
shadow-white
hover:bg-red-200 
hover:text-black
rounded-xl 
shadow-sm 
font-bold 
hover:scale-105 
active:scale-95 
duration-500 
hover:duration-500">{this.props.text}</button>


        )
    }
}