import { combineReducers } from 'redux';
import userReducer from './userReducer';
import dogReducer from './dogReducer';
import requestReducer from './requestReducer';
import candidateReducer from './candidateReducer';

const rootReducer = combineReducers({
      // My reducers
      userReducer,
      dogReducer,
      requestReducer,
      candidateReducer
})

export default rootReducer