import React from 'react';

export class Zad16 extends React.Component {

    state = {
        input: ""
    };

    setParagraph = (e: any) =>
    {
        this.setState({input: e.target.value})
    }

    render() {
        return (
            <>
                <input type="text" onChange={this.setParagraph}/>
                <p>{this.state.input}</p>
            </>
        );
    }
}