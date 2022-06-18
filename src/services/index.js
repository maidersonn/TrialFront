import axios from "axios";

import { getAllNonRejectedNoms, createNewNominations } from "./nominations";

const client = axios.create({
    baseURL: process.env.REACT_APP_BACK_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

const getAllNonRejectedNominations = getAllNonRejectedNoms(client);
const createNominations = createNewNominations(client);

export { getAllNonRejectedNominations, createNominations };