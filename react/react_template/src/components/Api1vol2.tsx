import React, { useState } from "react";
import { Author } from "./Author"

type Properties =
{
  authors: Author[];
  authorCreated: (author: Author, ok: () => void) => void;
}

const [isCreateFormShown, setIsCreateFormShown] = useState(false);
const closeCreateForm = () => { setIsCreateFormShown(false); }
const authorCreated = (author: Author) => { props.authorCreated(author, closeCreateForm); }

export const Api1vol2 = (props: Properties) => 
{
    const [author, setAuthor]: [Author, (author: Author) => void]
    = useState(undefined as any);
    const [isCreateFormShown, setIsCreateFormShown] = useState(false)
    const closeCreateForm = () => { setIsCreateFormShown(false); }
    const authorCreated = (author: Author) =>
    {
        props.authorCreated(author, closeCreateForm);
    }
}