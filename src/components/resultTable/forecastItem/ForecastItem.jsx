import React from 'react';

const ForecastItem = (props) => {
    return (
        <li>
            {props.item.name}
        </li>
        )
}

export default ForecastItem