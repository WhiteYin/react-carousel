import { SLIDE } from './actionTypes';

const reducer = (state = 0, action) => {
    let delta;
    switch (action.type) {
        case SLIDE:
            delta = state + (action.direction);
            return delta % (action.length);
        default:
            return state;
    }
};

export default reducer;
