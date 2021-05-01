import { combineReducers } from 'redux';
import userReducer from './userReducer';
import dogReducer from './dogReducer';

const rootReducer = combineReducers({
      // My reducers
      userReducer,
      dogReducer
})

export default rootReducer