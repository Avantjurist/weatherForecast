import React from 'react';

export default class SeachForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    render() {
        return (
            <input type="text" value={this.state.value} onChange={this.handleChange}/>
        )
    }
}