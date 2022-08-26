import {nanoid} from "nanoid";

const items = [
    {
        id: nanoid(),
        to: "/",
        text: "Home"
    },
    {
        id: nanoid(),
        to: "/posts",
        text: "Posts search"
    },
    {
        id: nanoid(),
        to: "/contacts",
        text: "Contacts"
    },
];

export default items;