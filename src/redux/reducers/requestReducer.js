import { CREATE } from '../types/requestType';

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
        default :
            return state
    }
};

export default requestReducer;