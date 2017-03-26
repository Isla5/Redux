//state argument is not application state, only the state
//this reducer is responsible for

export default function(state = null, action) {
    switch (action.type) {
        case 'ROOM_SELECTED':
            return action.payload
            //never mutate state like
            //state.name = room.name
    }

    return state
}
