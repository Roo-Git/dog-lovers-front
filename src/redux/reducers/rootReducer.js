import { combineReducers } from 'redux';
import userReducer from './userReducer';
import dogReducer from './dogReducer';
import requestReducer from './requestReducer';
import candidateReducer from './candidateReducer';
import confirmationReducer from './confirmationReducer';

const rootReducer = combineReducers({
      // My reducers
      userReducer,
      dogReducer,
      requestReducer,
      candidateReducer,
      confirmationReducer
})

export default rootReducer