import { axioService } from "../Service";
import axios from 'axios';
import { FETCH_BUSINESS, ERROR_LOADING_BUSINESS,
     BASE_URL, API_KEY, FETCH_MORE_DATA, GET_SHOP_BY_ID } from "./types";
import { Actions } from "react-native-router-flux";

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
    return {
        type: FETCH_MORE_DATA,
        payload:{state, skip: skipTo + limit, limit}
    }
}

const goToShop = (id, distance) => {
    return (dispatch) => {
        axioService.request({
            url:`/businesses/${id}`,
            method: 'GET'
        })
        .then(response => {
            dispatch({
                type:GET_SHOP_BY_ID,
                payload:{ detail: response.data, status: response.status, distance }
            })
            
            Actions.page({type:'reset'})
        })
        .catch(error => {
            dispatch({
                type: ERROR_LOADING_BUSINESS,
                payload: { ...error.response.data, status: error.response.status }
            })
        })
    }
}

const goToHome = () => {
    Actions.main()
    return {
        type:'',
        payload:{}
    }
}


export {
    fetchBusinesses,
    fetchMoreData,
    goToShop,
    goToHome
}