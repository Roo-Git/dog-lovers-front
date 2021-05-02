import { combineReducers } from 'redux';
import userReducer from './userReducer';
import dogReducer from './dogReducer';
import requestReducer from './requestReducer';

const rootReducer = combineReducers({
      // My reducers
      userReducer,
      dogReducer,
      requestReducer
})

export default rootReducer