import React from 'react';

const div  = (props) =>   {
    const{
        txt
    } = props
    return (
        <div className="mainReact">
            <div className="box">
                {txt}
            </div>
        </div>
    )
}
export default div;