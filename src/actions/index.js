import axiosInstance from '../utils/client'
import * as actionTypes from './types/weather';

export const weatherFetchError = () => {
    return {
        type: actionTypes.WEATHER_FETCH_ERROR
    }
};

export const weatherFetchStart = () => {
    return {
        type: actionTypes.WEATHER_FETCH_START
    }
};

export const weatherFetchSuccess = (weathers) => {
    return {
        type: actionTypes.WEATHER_FETCH_SUCCESS,
        payload: weathers
    }
};

export const weatherFetch = () => dispatch => {
    dispatch(weatherFetchStart());
    axiosInstance.get().then(response => dispatch(weatherFetchSuccess(response.data.list)))
        .catch(error => dispatch(weatherFetchError))
};

export const weatherRemove = (id) => {
    return {
        type: actionTypes.WEATHER_REMOVE_START,
        id: id
    }
};
