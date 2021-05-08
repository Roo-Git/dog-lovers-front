import { CONVALIDATE, } from '../types/confirmationType';

const initialState = {
    confirmation: [],

};

const candidateReducer = (state = initialState, action) => {
    switch(action.type){
        case CONVALIDATE :
            return {
                ...state,
                confirmation : action.payload
            }

        default :
            return state
    }
};

export default candidateReducer;