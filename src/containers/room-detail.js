import React, {Component} from 'react';
import {connect} from 'react-redux';

export default class RoomDeatail extends Component {
    render() {
        return (
            <div>
                <h3>Current Room</h3>
                <div>{this.props.room.name}</div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {room: state.activeRoom}
}

export default connect(mapStateToProps)(RoomDetail);
