import React, {Component} from 'react';
import {connect} from 'react-redux';

class RoomDetail extends Component {
    render() {
        //because in the beginning this.props.room is null, so we will
        //have an error
        if (!this.props.room) {
            return <div>Select a lab</div>
        }
        return (
            <div>
                <div>
                    <h3>Current Room</h3>
                    <div>{this.props.room.name}</div>
                    <div>Description:{this.props.room.descr}</div>
                    <div>Reserved: {this.props.room.reserved}</div>
                    <input type='button' value='Reserve' onClick={() => this.props.reserveRoom(reserved)}/>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {room: state.activeRoom}
}

export default connect(mapStateToProps)(RoomDetail);
