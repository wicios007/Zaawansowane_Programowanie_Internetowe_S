import { ok } from "assert";
import React from "react";
import { Author } from "../model/author";
import { Api1vol2 } from "./Api1vol2"

type State =
{
    authors: Author[];
}

export class Api1 extends React.Component<{}, State>
{
    constructor(props: {})
    {
        super(props);
        this.state =
        {
            authors: []
        }
    }

    async componentDidMount()
    {
        let res = await fetch("https://localhost:7184/api/authors")
        let authors = (await res.json()) as Author[];
        this.setState({ authors: authors });
    }

    authorCreated = (author:Author) =>
    {
        const newState =
        {
            authors: this.state.authors.concat(author)
        }
        this.setState(newState);
        ok();
    }

    render()
    {
        return <Api1vol2 authors={this.state.authors}
        authorCreated={this.authorCreated}></Api1vol2>
    }

}
