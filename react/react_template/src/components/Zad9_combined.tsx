import React from 'react';
import { Zad9vol1 } from './Zad9vol1';
import { Zad9vol2 } from './Zad9vol2';
import { number_of_visible_button } from "./Context"

export class Zad9_combined extends React.Component {
    
    setNumber = (number: any) => {
        this.setState({ number });
    };

    state = {
        number: 1,
        setNumber: this.setNumber
    };

    render() {
        return (
            <number_of_visible_button.Provider value={this.state}>
                <Zad9vol1/>
                <Zad9vol2/>
            </number_of_visible_button.Provider>
        );
    }
}