import { SHOW, DOGLOGOUT} from '../types/dogType';

const initialState = {
    dog: [],

};

const dogReducer = (state = initialState, action) => {
    switch(action.type){
        case SHOW :
            return {
                ...state,
                dog : action.payload
            }
        case DOGLOGOUT :
            return initialState     
                   
        default :
            return state
    }
};

export default dogReducer;