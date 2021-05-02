import { CREATE, REQUESTLOGOUT } from '../types/requestType';

const initialState = {
    request: {},

};

const requestReducer = (state = initialState, action) => {
    switch(action.type){
        case CREATE :
            return {
                ...state,
                request : action.payload
            }
        case REQUESTLOGOUT :
            return initialState  

        default :
            return state
    }
};

export default requestReducer;