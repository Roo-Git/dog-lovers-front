import { ADD_LIST, REQUESTLOGOUT } from '../types/requestType';

const initialState = {
    list: [],

};

const requestReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_LIST :
            return {
                ...state,
                list : action.payload
            }
        case REQUESTLOGOUT :
            return initialState  

        default :
            return state
    }
};

export default requestReducer;