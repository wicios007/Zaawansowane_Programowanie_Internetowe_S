import React from 'react';

//ZAD 1
/*
type State = {
    fullName: string;
}

export class First extends React.Component<{}, State> {

    constructor(props:{}) {
        super(props);
        this.state = {
            fullName: ""
        };
    }

    method = () => {
        const newState = {fullName: "Roksana Kozak"};
        this.setState(newState);
    }

    render() {
        return(
        <div>
            <p>{this.state.fullName}</p>
            <button onClick={this.method}>Wyswietl</button>
        </div>
        );
    }
}
*/    

//ZAD2

export class First extends React.Component {
    links = [
        {id:1, title: "link1"},
        {id:2, title: "link2"}
    ]

    render() {
        return (
            <>
                <List>
                    {
                        this.links.map(
                            l => <ListItem key= {l.id}>{l.title}</ListItem>
                        )
                    }
                </List>
            </>
        )
    }
}