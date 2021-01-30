import { useReducer } from "react";
import { REQUEST, SUCCESS, FAILURE } from "../_types";

const [state, dispatch] = useReducer((state, action) => {
    const { type } = action;
    switch (action) {
        case REQUEST.POSTS:
            const newState = "do something with the action"
            return newState;
        case SUCCESS.POSTS:
            const newState = "do something with the action"
            return newState;
        case FAILURE.POSTS:
            const newState = "do something with the action"
            return newState;
        default:
            throw new Error()
    }
}, []);