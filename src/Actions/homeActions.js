import { axioService } from "../Service";
import axios from 'axios';
import { FETCH_BUSINESS, ERROR_LOADING_BUSINESS,
     BASE_URL, API_KEY, FETCH_MORE_DATA } from "./types";

const fetchBusinesses = async () => {
    try{
        
        return (dispatch) => {
            axioService
                .request({
                    url: '/businesses/search?term=delis&latitude=37.786882&longitude=-122.399972',
                    method: 'GET'
                })
                .then(response => {
                     dispatch({
                        type: FETCH_BUSINESS,
                        payload: { ...response.data, status: response.status }
                    })
                })
                .catch(error => {
                     dispatch({
                        type: ERROR_LOADING_BUSINESS,
                        payload: { ...error.response.data, status: error.response.status }
                    })
                });
        }

    }catch(e){
        return {
            type: ERROR_LOADING_BUSINESS,
            payload: e
        }
    }
}

const fetchMoreData = (state = [], skipTo = 0, limit = 5) => {
    console.log('oks s', skipTo + limit)
    return {
        type: FETCH_MORE_DATA,
        payload:{state, skip: skipTo + limit, limit}
    }
}


export {
    fetchBusinesses,
    fetchMoreData
}