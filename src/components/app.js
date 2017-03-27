import React, {Component} from 'react';
import RoomList from '../containers/room-list';
import RoomDetail from '../containers/room-detail';

export default class App extends Component {
    render() {
        return (
            <div><RoomList/><RoomDetail/></div>
        );
    }
}
