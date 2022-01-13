import { Card, CardContent, CardHeader, IconButton, List } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import { Author } from "../Model/author";
import { AuthorListItem } from "./AuthorListItem";
import { Search } from "./Search";

type Properties = {
    authors: Author[];
    authorSelected: (author: Author) => void;
    showCreateForm: () => void;
};

type State = {
    title: string;
    isListShown: boolean;
    filterString: string;
};

export class AuthorsList extends React.Component<Properties, State> {

    constructor(props: Properties) {
        super(props);
        this.state = {
            title: "Ukryj listę",
            isListShown: true,
            filterString: "",
        };
    }

    changeListVisibility = () => {
        this.setState((state) => ({
            ...state,
            title: state.isListShown ? "Pokaż listę" : "Ukryj listę",
            isListShown: !state.isListShown,
        }));
    };

    search = (str: string) => {
        this.setState((state) => ({
            ...state,
            filterString: str
        }));
    };

    render() {
        return (
            <>
                <Card>
                    <CardHeader
                        title="Lista autorów"
                        action={
                            <>
                                <IconButton
                                    color="primary"
                                    size="large"
                                    onClick={this.props.showCreateForm}
                                >
                                    <AddIcon />
                                </IconButton>
                                <IconButton
                                    onClick={this.changeListVisibility}
                                    color="default"
                                    size="medium"
                                >
                                    {this.state.isListShown ? (
                                        <VisibilityIcon />
                                    ) : (
                                        <VisibilityOffIcon />
                                    )}
                                </IconButton>
                            </>
                        }
                    ></CardHeader>
                    <CardContent sx={{ padding: 0, margin: 0 }}>
                        <Search
                            numberOfAuthors={this.props.authors.length}
                            search={this.search}
                        ></Search>
                        {this.state.isListShown && (
                            <List>
                                {this.props.authors.map(
                                    (a: Author, idx: number) => (
                                        <AuthorListItem
                                            key={a.id}
                                            author={a}
                                            idx={idx}
                                            authorSelected={(a) =>
                                                this.props.authorSelected(a)
                                            }
                                        ></AuthorListItem>
                                    )
                                )}
                            </List>
                        )}
                    </CardContent>
                </Card>
            </>
        );
    }
}
