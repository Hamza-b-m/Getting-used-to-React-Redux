import { PLUS_COUNTER, MINUS_COUNTER } from "../actions/types";

var counter = 0;

const counterReducer = (state = counter, action) => {
    switch (action.type) {
        case PLUS_COUNTER:
            return state + action.payload;

        case MINUS_COUNTER:
            return state + action.payload;

        default:
            return state;
    };
};

export default counterReducer;
