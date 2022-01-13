import React, { useState } from "react";
import "./App.css";
import { AppBar, Grid, Toolbar, Typography } from "@mui/material";
import { AuthorsList } from "./Components/AuthorList";
import { Author } from "./Model/author";
import { AuthorDetails } from "./Components/AuthorDetails";
import { CreateAuthor } from "./Components/CreateAuthor";

type Properties = {
    authors: Author[];
    authorCreated: (author: Author, ok: () => void) => void;
};

export const App = (props: Properties) => {
    const [author, setAuthor]: [
        Author | undefined,
        (author: Author | undefined) => void
    ] = useState(undefined);

    const [isCreateFormShown, setIsCreateFormShown] = useState(false);

    const closeCreateForm = () => {setIsCreateFormShown(false)}



    const authorCreated = (author: Author) => {
        props.authorCreated(author, closeCreateForm);
    };

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div">
                        Przykładowa biblioteka w react
                    </Typography>
                </Toolbar>
            </AppBar>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <AuthorsList
                        authors={props.authors}
                        authorSelected={(a) => setAuthor(a)}
                        showCreateForm={() => setIsCreateFormShown(true)}
                    ></AuthorsList>
                </Grid>
                <Grid item xs={6}>
                    {author && (
                        <AuthorDetails
                            author={author}
                            close={() => setAuthor(undefined)}
                        ></AuthorDetails>
                    )}
                    {isCreateFormShown && (
                        <CreateAuthor
                            submit={authorCreated}
                            cancel={closeCreateForm}
                        ></CreateAuthor>
                    )}
                </Grid>
            </Grid>
        </>
    );
};

export default App;
