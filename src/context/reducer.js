import { fetchData } from '../utils';

const initialState = {
    coinArr: [],
    filterArr: []
};

const actionTypes = {
    GET_DATA: 'GET_DATA'
};

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.GET_DATA:
            return {
                ...state,
                coinArr: action.payload,
                filterArr: action.payload
            };
        default:
            return {
                ...state
            };
    }
};

export { initialState, actionTypes };
export default reducer;