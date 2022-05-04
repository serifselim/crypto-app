import { fetchData } from '../utils';

const initialState = {
    coinArr: [],
    filterArr: [],
    followArr: []
};

const actionTypes = {
    GET_DATA: 'GET_DATA',
    CHANGE_IS_ACTIVE: 'CHANGE_IS_ACTIVE',
    ADD_FOLLOW: 'ADD_FOLLOW',
    REMOVE_FOLLOW: 'REMOVE_FOLLOW'

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
            state.filterArr.map((item, index) => {
                if (item.id === action.id) {
                    state.filterArr[index].is_active = true;
                } else {
                    state.filterArr[index].is_active = false;
                }
            });
            return { ...state };
        case actionTypes.ADD_FOLLOW:
            let isThere = false;
            state.filterArr[action.index].is_follow = true;

            if (state.followArr) {
                state.followArr.map((item, index) => {
                    if (item.id === action.payload.id) {
                        isThere = true;
                    }
                });
            }

            if (!isThere) {
                state.followArr.push(action.payload);
            }
            return { ...state };
        case actionTypes.REMOVE_FOLLOW:
            const filteredArr = state.followArr.filter(item => item.id !== action.payload.id);
            state.filterArr[action.index].is_follow = false;
            return {
                ...state,
                followArr: filteredArr
            };
        default:
            return {
                ...state
            };
    }
};

export { initialState, actionTypes };
export default reducer;