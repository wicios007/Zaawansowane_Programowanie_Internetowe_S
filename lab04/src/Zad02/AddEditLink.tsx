import {
    Button,
    Card,
    CardContent,
    CardHeader,
    TextField,
} from "@mui/material";
import React from "react";
import { Link } from "./Link";

type Properties = {
    title: string;
    link: Link | null;
    addEditLink: (link: Link) => void;
    changeEditVisibility: () => void;
};
type State = {
    name: string;
    nameValid: boolean;
    url: string;
    urlValid: boolean;
    description: string;
    descriptionValid: boolean;
    submitDisabled: boolean;
};
export class AddEditLink extends React.Component<Properties, State> {
    constructor(props: Properties) {
        super(props);
        this.state = {
            name: props.link?.name || "",
            nameValid: false,
            url: props.link?.url || "",
            urlValid: false,
            description: props.link?.description || "",
            descriptionValid: false,
            submitDisabled: true,
        };
    }

    // change = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     let newState = {
    //         ...this.state,
    //         [e.currentTarget.name]: e.target.value,
    //     };
    //     this.setState(newState);
    // };

    nameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let nameValid = this.state.name === "" ? true : false;
        let submitValid =
            nameValid && this.state.urlValid && this.state.descriptionValid;
        let newState = {
            ...this.state,
            [e.currentTarget.name]: e.target.value,
            nameValid: nameValid,
            submitDisabled: !submitValid,
        };
        this.setState(newState);
    };
    urlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let urlValid = this.state.url === "" ? true : false;
        let submitValid =
            this.state.nameValid && urlValid && this.state.descriptionValid;
        let newState = {
            ...this.state,
            [e.currentTarget.name]: e.target.value,
            urlValid: urlValid,
            submitDisabled: !submitValid,
        };
        this.setState(newState);
    };
    descriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let descriptionValid = this.state.description === "";
        let submitValid =
            this.state.nameValid && this.state.urlValid && descriptionValid;
        let newState = {
            ...this.state,
            [e.currentTarget.name]: e.target.value,
            descriptionValid: descriptionValid,
            submitDisabled: !submitValid,
        };
        this.setState(newState);
    };

    submit = (e: React.ChangeEvent<any>) => {
        e.preventDefault();
        this.props.addEditLink(
            new Link(this.state.name, this.state.url, this.state.description)
        );
    };

    checkField = (text: string[] | string): boolean => {
        if (Array.isArray(text)) {
            text.forEach((element) => {
                if (element === "") {
                    return true;
                }
            });
            return false;
        }
        return text === "";
    };

    render() {
        return (
            <>
                <Card>
                    <CardHeader title={this.props.title}></CardHeader>
                    <CardContent>
                        <form
                            onSubmit={this.submit}
                            id={
                                (this.props.link?.id + "-" || "new-") +
                                "add-edit-link-form"
                            }
                        >
                            <TextField
                                value={this.state.name}
                                onChange={this.nameChange}
                                name="name"
                                label="Nazwa"
                                placeholder="Nazwa linku"
                                fullWidth
                                error={this.checkField(this.state.name)}
                                helperText={
                                    this.checkField(this.state.name)
                                        ? "Nazwa musi zostać podana!"
                                        : " "
                                }
                                // onBlur={() => (this.checkField([this.state.name, this.state.url, this.state.description])? this.setState(state => ({...state, error: true})): this.setState(state => ({...state, error: false})))}
                            ></TextField>
                            <TextField
                                value={this.state.url}
                                onChange={this.urlChange}
                                name="url"
                                label="Link"
                                placeholder="Link url"
                                fullWidth
                                error={this.checkField(this.state.url)}
                                helperText={
                                    this.checkField(this.state.url)
                                        ? "Adres url musi zostać podany!"
                                        : " "
                                }
                                // onBlur={() => (this.checkField([this.state.name, this.state.url, this.state.description]) ? this.setState(state => ({...state, error: true})): this.setState(state => ({...state, error: false})))}
                            ></TextField>
                            <TextField
                                multiline
                                rows={2}
                                maxRows={4}
                                value={this.state.description}
                                onChange={this.descriptionChange}
                                name="description"
                                label="Opis"
                                placeholder="Wprowadź opis"
                                fullWidth
                                error={this.checkField(this.state.description)}
                                helperText={
                                    this.checkField(this.state.description)
                                        ? "Opis musi zostać podany!"
                                        : " "
                                }
                                // onBlur={() => (this.checkField([this.state.name, this.state.url, this.state.description]) ? this.setState(state => ({...state, error: true})): this.setState(state => ({...state, error: false})))}
                            ></TextField>
                        </form>

                            <Button
                                disabled={this.state.submitDisabled}
                                type="submit"
                                variant="contained"
                                form={
                                    (this.props.link?.id + "-" || "new-") +
                                    "add-edit-link-form"
                                }
                            >
                                Zatwierdź
                            </Button>
                        
                        <Button onClick={this.props.changeEditVisibility}>
                            Zamknij
                        </Button>
                    </CardContent>
                </Card>
            </>
        );
    }
}
