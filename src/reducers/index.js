import { combineReducers } from 'redux';
import RoomsReducer from './reducer_rooms';
import ActiveRoom from './reducer_active_room'

const rootReducer = combineReducers({
//  state: (state = {}) => state
  rooms: RoomsReducer,
  activeRoom: ActiveRoom
});

export default rootReducer;
