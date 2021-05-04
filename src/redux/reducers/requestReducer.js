import { CREATE, GET, REQUESTLOGOUT } from '../types/requestType';

const initialState = {
    createRequest: {},
    getAllRequest : [],

};

const requestReducer = (state = initialState, action) => {
    switch(action.type){
        case CREATE :
            return {
                ...state,
                createRequest : action.payload
            }
        case GET :
            return {
                ...state,
                getAllRequest : action.payload
              }
        case REQUESTLOGOUT :
            return initialState  

        default :
            return state
    }
};

export default requestReducer;