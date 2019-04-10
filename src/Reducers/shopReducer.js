import { GET_SHOP_BY_ID } from "../Actions/types";

const INITIAL_STATE = { storeDetail: {}};

export default (state = INITIAL_STATE, actions) => {
    switch(actions.type){
        case GET_SHOP_BY_ID:
            console.log('shop', actions.payload)
            return {...state,
                storeDetail: actions.payload.detail
            }
        default:
            return {...state}
    }
}