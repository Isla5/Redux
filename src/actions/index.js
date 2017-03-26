export function selectRoom(room) {
    //selectroom is an action creator and it needs to return an action,
    //an object with a type property
    return {
      type: 'ROOM_SELECTED',
      payload: room
    }
}
