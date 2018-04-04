import React from 'react';
import { withRouter } from 'react-router-dom';

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
    };

    render() {
        return (
            <form action="">
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
                <button onClick={this.handleClick}>Search</button>
            </form>
        )
    }
}

export default withRouter(SeachForm)

