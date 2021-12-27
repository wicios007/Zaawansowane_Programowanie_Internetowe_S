import React from "react";
import { Button } from "react-bootstrap";
import { Image } from "./Image"

type Properties = {
	image: Image,
	showedImage: number,
	imagesLength: number,
	prevImg: () => void,
	nextImg: () => void,
};

export class Zad14Picture extends React.Component<Properties> {

    render() {
        return (
			<>
            <div className="pictures picture">
                {
                    <img src={this.props.image.address} alt={this.props.image.alt}></img>
                }
				<br/>
				{this.props.showedImage > 0 ? 
                    <Button onClick={this.props.prevImg}>Poprzednie</Button>
                    : null
                }
                {this.props.showedImage < this.props.imagesLength - 1 ?
                    <Button onClick={this.props.nextImg}>Następne</Button>
                    : null
                }
            </div>
			</>
        );
    }
}