import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectRoom} from '../actions/index';
import {bindActionCreators} from 'redux';

class RoomList extends Component {
    renderList() {
        return this.props.rooms.map((room) => {
            return (
                <li key={room.name} onClick={() => this.props.selectRoom(room)}>
                    {room.name}
                </li>
            )
        })
    }
    render() {
        return (
            <ul>{this.renderList()}</ul>
        )
    }

}

function mapStateToProps(state) {
    //whatever is returned will show up as props insidRe of RoomList
    return {rooms: state.rooms}
}

//Anything returned from this f will end up as props on the
//Roomlist container
function mapDispatchToProps(dispatch) {
    //whenever selectroom is called, the result should be passed to
    //all of our reducers
    return bindActionCreators({
        selectRoom: selectRoom
    }, dispatch)
}

//Promote RoomList from a component to a container -it needs to know
//about this new dispatch method, selectroom. Make it available
//as a prop

export default connect(mapStateToProps, mapDispatchToProps)(RoomList);
