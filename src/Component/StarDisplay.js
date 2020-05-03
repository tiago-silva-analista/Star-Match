import React from 'react';
import Utils from './../utils/util'

const  StarNumber = (props) =>(
    <>
        {Utils.range(1, props.maxNumber).map(starId =>
                        <div className="star" key={starId} />
                    )}
    </>
)

export default StarNumber;