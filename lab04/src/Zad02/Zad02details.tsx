import React from "react";
import "./Zad02.css"

type Properties ={
	text: string,
}

export class Zad02details extends React.Component<Properties>{


    render(){
        return(<>
            {this.props.text}
        </>)
    }

}