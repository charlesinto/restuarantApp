import { FETCH_BUSINESS, ERROR_LOADING_BUSINESS, FETCH_MORE_DATA } from "../Actions/types";
const INITIAL_STATE = {store:[], skip: 0, limit: 5, store:[], region: null,business:[], total: null};

export default (state = INITIAL_STATE, actions) => {
    switch(actions.type){
        case FETCH_BUSINESS:
            return {
                ...state,
                store:actions.payload.businesses,
                region: actions.payload.region,
                total: actions.payload.total,
                business: actions.payload.businesses.slice(state.skip, state.limit)
            }
        case ERROR_LOADING_BUSINESS:
            return {
                ...state
            }
        case FETCH_MORE_DATA: 
            return {
                ...state,
                skip: actions.payload.skip,
                limit: actions.payload.limit,
                business: [...actions.payload.state, ...state.store.slice(actions.payload.skip, actions.payload.skip + state.limit)]
            }
        default:
            return {...state}
    }
}