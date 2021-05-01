import { SHOW } from '../types/dogType';

const initialState = {
    dog: {}

};

const dogReducer = (state = initialState, action) => {
    switch(action.type){
        case SHOW :
            return {
                ...state,
                dog : action.payload.dog
            }            
        default :
            return state
    }
};

export default dogReducer;