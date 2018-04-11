import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { cleanError } from '../../../../redux/actions/index';

class ErrorModalWindow extends Component {
    handleClick = () => {
        this.props.cleanError();
        this.props.history.goBack();
    };

    render() {
        return (
            this.props.errors.length ?
                <div>
                    <div>{this.props.errors}</div>
                    <button onClick={this.handleClick}>ok</button>
                </div> : null
        );
    }
}

const mapStateToProps = ({errors}) => ({errors});

const mapDispatchToProps = dispatch => ({
    cleanError: () => dispatch(cleanError()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ErrorModalWindow));
