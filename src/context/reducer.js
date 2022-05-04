import { fetchData } from '../utils';

const initialState = {
    coinArr: [],
    filterArr: [],
    followArr: []
};

const actionTypes = {
    GET_DATA: 'GET_DATA',
    CHANGE_IS_ACTIVE: 'CHANGE_IS_ACTIVE',
    ADD_FOLLOW: 'ADD_FOLLOW'
};

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.GET_DATA:
            return {
                ...state,
                coinArr: action.payload,
                filterArr: action.payload
            };
        case actionTypes.CHANGE_IS_ACTIVE:
            return {
                ...state,
                filterArr: action.payload
            };
        case actionTypes.ADD_FOLLOW:
            state.followArr.push(action.payload);
            return {
                ...state,
            };
        default:
            return {
                ...state
            };
    }
};

export { initialState, actionTypes };
export default reducer;