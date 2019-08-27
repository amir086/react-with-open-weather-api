import * as actionTypes from '../actions/types/weather';


const weatherReducers = (state = [], action) => {
    switch (action.type) {
        case actionTypes.WEATHER_FETCH_SUCCESS:
            return [
                ...state,
                ...action.payload
            ];
        case actionTypes.WEATHER_FETCH_START:
            return state;
        case actionTypes.WEATHER_FETCH_ERROR:
            return state;
        case actionTypes.WEATHER_REMOVE_START:
            return state.filter((data, i) => i !== action.id);
        default:
            return state
    }
};

export default weatherReducers
