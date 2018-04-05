import React from 'react';

const ForecastItem = (props) => {
    console.log(props)
    return (
        <li>
            name: {props.item.name}, temperature: {props.item.main.temp}
        </li>
        )
}

export default ForecastItem