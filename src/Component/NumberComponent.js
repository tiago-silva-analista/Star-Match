import React from 'react';
import Utils from   './../utils/util';

const StarNumber = props =>(
    <button 
        className="number" 
        style={{backgroundColor:Utils.colors[props.status]}}
        onClick={() => props.onClick(props.numberId, props.status)}>
        {props.numberId}
    </button>
);


export default StarNumber;

