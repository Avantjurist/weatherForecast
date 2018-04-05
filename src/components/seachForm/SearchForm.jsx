import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { itemsFetchData} from '../../actions/index';

class SeachForm extends React.Component {

    constructor() {
        super();
        this.state = {
            value: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
    };

    handleClick = () => {
        this.props.history.push("/search/" + this.state.value)
        this.props.fetchData(this.state.value)
    };

    render() {
        return (
            <form onSubmit={e=>e.preventDefault()}>
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
                <button onClick={this.handleClick}>Search</button>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (cityName) => dispatch(itemsFetchData(cityName))
    }
};

export default connect(null, mapDispatchToProps)(withRouter(SeachForm));

