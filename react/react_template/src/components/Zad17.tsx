import React from 'react';

export class Zad17 extends React.Component {

    state = {
        input: ""
    };

    setInput = (e: any) => {
        this.setState({ input: e.target.value })
    }

    render() {
        return (
            <>
                <input type="text" onChange={this.setInput} value={this.state.input}/>
                <input type="text" onChange={this.setInput} value={this.state.input}/>
            </>
        );
    }
}