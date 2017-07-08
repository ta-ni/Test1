import React from 'react';
import {setVisibilityFilter} from '../actions/index';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import image from '../images/product1.png'


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.dispatch(setVisibilityFilter(!this.props.todo));
    }

    render() {
        return <div>
            {this.props.todo && <p>ololo</p>}
            <div onClick={this.handleClick}>Home</div>
        </div>;
    }
}

Home.PropTypes = {
    dispatch: PropTypes.func,
    todo: PropTypes.bool,
};

export default connect((state) => ({
    todo: state.todo
}))(Home);