import {combineReducers} from 'redux';
import RoomsReducer from './reducer_rooms';
import ActiveRoom from './reducer_active_room';
import ReservedState from './reducer-button.js'

const rootReducer = combineReducers({
    //  state: (state = {}) => state
    rooms: RoomsReducer,
    activeRoom: ActiveRoom,
    reserved: ReservedState
});

export default rootReducer;
