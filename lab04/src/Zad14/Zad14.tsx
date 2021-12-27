import React from "react";
import "./Zad14.css"
import { Image } from "./Image"
import { Zad14Picture } from "./Zad14Picture";

type State = {
    images: Image[],
    showedImage: number
};

export class Zad14 extends React.Component<{}, State> {

    private images: Image[] = [
        new Image(
            "PCz logo poziom",
            "https://pcz.pl/fcp/aGBUKOQtTKlQhbx08SlkTUQdKUWRuHQwFDBoIVURNFDgPW1ZpCFghUHcKVigEQR1BXQEsKTwdAQsKJBVYCRlYdxdFDy5IGzpEMEIrMQxBC0EGRUtwf08Q/_users/code_YCFYXIghYYUQ6UhciCQgDI0QRCWY8AQ/kamila/logo/logo_paczka/logo_pl/pcz_logo_pol_poziom_kolor.png"
        ),
        new Image(
            "PCz logo pion",
            "https://pcz.pl/fcp/aGBUKOQtTKlQhbx08SlkTUQdKUWRuHQwFDBoIVURNFDgPW1ZpCFghUHcKVigEQR1BXQEsKTwdAQsKJBVYCRlYdxdFDy5IGzpEMEIrMQxBC0EGRUtwf08Q/_users/code_YCFYXIghYYUQ6UhciCQgDI0QRCWY8AQ/kamila/logo/logo_paczka/logo_pl/pcz_logo_piol_pion_kolor.png"
        ),
        new Image(
            "PCz WIMiI logo",
            "https://wimii.pcz.pl/thumb/cGBUKKhBRbQ13Vh00DRBtTEECHyctCTFNNjASVBQEJmIGUwM_BRcoRTpDBz0aUXETVwhdOCAxQg4GIgATSlUcJA9SWHFGVSBQOm8DMQUKWE1EHBRqYE8dEAYvBFISKBMpQQ1YeVAJbRt3XBU2D0ELQUQeUWRuDgIMHTcOXQoSCG9ZFRQuE0osViFVEzcaGhNPFgISLykyBAZLf0MFRFtYPgpNH2leGywaIkhHb1gbA1EEUA4/logo_wimii.png"
        ),
        new Image(
            "Angular logo",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png"
        ),
    ];

    constructor(props: {}) {
        super(props);
        this.state = {
            images: this.images,
            showedImage: 0
        }
    }


    render() {
        return (
            <>
            <div className="pictures thumbnails">
                {this.state.images.map(
                    (l, i) => <img
                    src={l.address}
                    alt={l.alt}
                    onClick={() => {this.changePic(i)}}
                    className={i===this.state.showedImage ? "selected-picture" : ""}
                ></img>
                )}
            </div>
            <Zad14Picture image={this.state.images[this.state.showedImage]} showedImage={this.state.showedImage} imagesLength={this.state.images.length} prevImg={this.prevImg} nextImg={this.nextImg}></Zad14Picture>
            </>
        );
    }
    changePic = (index: number) => {
        const newState = {
			...this.state,
			showedImage: index
		}
		this.setState(newState)
    }
    nextImg = () => {
        let newState = {
            ...this.state,
            showedImage:
                this.state.showedImage < this.state.images.length - 1
                    ? this.state.showedImage + 1
                    : this.state.showedImage,
        };
        this.setState(newState);
    };
    prevImg = () => {
        let newState = {
            ...this.state,
            showedImage:
                this.state.showedImage > 0 ? this.state.showedImage - 1 : this.state.showedImage,
        };
        this.setState(newState);
    };
}