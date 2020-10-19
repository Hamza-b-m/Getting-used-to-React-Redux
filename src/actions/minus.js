import { MINUS_COUNTER } from "./types";

export const minus = (m) => {
    return {
        type: MINUS_COUNTER,
        payload: m,
    };
};