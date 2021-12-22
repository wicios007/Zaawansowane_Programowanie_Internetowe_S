import React from "react";
import { Table, Button } from "react-bootstrap";
import "./Zad06.css";

type State = {
    images: Image[];
    index: number;
};

class Image {
    constructor(public name: string, public url: string) {}
}
export class Zad06 extends React.Component<{}, State> {
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
            index: 0,
        };
    }

    render() {
        return (
            <>
                <Table>
                    <tbody>
                        <thead>Galeria</thead>
                        {
                            <tr>
                                <img
                                    src={
                                        this.state.images[this.state.index].url
                                    }
                                    alt={
                                        this.state.images[this.state.index].name
                                    }
                                ></img>
                            </tr>
                        }
                    </tbody>
                </Table>
                {this.state.index > 0 ? 
                    <Button onClick={this.prevImg}>Poprzednie</Button>
                    : null
                }
                {this.state.index < this.state.images.length - 1 ?
                    <Button onClick={this.nextImg}>Następne</Button>
                    : null
                }
            </>
        );
    }

    nextImg = () => {
        let newState = {
            ...this.state,
            index:
                this.state.index < this.state.images.length - 1
                    ? this.state.index + 1
                    : this.state.index,
        };
        this.setState(newState);
    };
    prevImg = () => {
        let newState = {
            ...this.state,
            index:
                this.state.index > 0 ? this.state.index - 1 : this.state.index,
        };
        this.setState(newState);
    };
}