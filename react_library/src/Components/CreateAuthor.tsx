import { Button, Card, CardActions, CardContent, CardHeader, IconButton, Stack, TextField } from "@mui/material";
import React from "react";
import { Author } from "../Model/author";
import CloseIcon from "@mui/icons-material/Close";

type State = {
    firstName: string;
    lastName: string;
    email: string;
};
type Properties = {
    submit: (author: Author) => void;
    cancel: () => void;
};

export class CreateAuthor extends React.Component<Properties, State> {
    constructor(props: Properties) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
        };
    }

    change = (e: React.ChangeEvent<HTMLInputElement>) => {
        let newState = {
            ...this.state,
            [e.currentTarget.name]: e.target.value,
        };
        this.setState(newState);
    };

    submit = (e: React.ChangeEvent<any>) => {
        e.preventDefault();
        this.props.submit(
            new Author(
                0,
                this.state.firstName,
                this.state.lastName,
                this.state.email
            )
        );
    };
    render() {
        return (
            <Card>
                <CardHeader
                    title="Szczegóły autora"
                    action={
                        <IconButton onClick={() => this.props.cancel()}>
                            <CloseIcon />
                        </IconButton>
                    }
                ></CardHeader>
                <CardContent>
                    <form onSubmit={this.submit} id="createForm">
                        <Stack gap={1}>
                            <TextField
                                value={this.state.firstName}
                                onChange={this.change}
                                name="firstName"
                                label="Imię"
                                placeholder="Podaj imię"
                                fullWidth
                            ></TextField>
                            <TextField
                                value={this.state.lastName}
                                onChange={this.change}
                                name="lastName"
                                label="Nazwisko"
                                placeholder="Podaj nazwisko"
                                fullWidth
                            >
                            </TextField>
                            <TextField
                                value={this.state.email}
                                onChange={this.change}
                                name="email"
                                label="Email"
                                placeholder="Podaj email"
                                fullWidth
                            ></TextField>
                        </Stack>
                    </form>
                </CardContent>
                <CardActions>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        form="createForm"
                    >
                        Zatwierdź
                    </Button>
                    <Button
                        variant="text"
                        color="secondary"
                        onClick={() => this.props.cancel()}
                    >
                        Zamknij
                    </Button>
                </CardActions>
            </Card>
        );
    }
}
