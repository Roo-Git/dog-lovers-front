import { CREATE, GET, REQUESTLOGOUT } from '../types/requestType';

const initialState = {
    createRequest: {},
    getAllrequest : [],

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
                getAllrequest : action.payload
              }
        case REQUESTLOGOUT :
            return initialState  

        default :
            return state
    }
};

export default requestReducer;