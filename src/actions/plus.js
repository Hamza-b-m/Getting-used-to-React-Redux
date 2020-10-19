import { PLUS_COUNTER } from "./types";

export const plus = (p) => {
    return {
        type: PLUS_COUNTER,
        payload: p,
    };
};