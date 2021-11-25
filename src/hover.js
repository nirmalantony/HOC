import React from 'react';
import UpdatedComponent from './withCounter';

const Hover = (props)=>
{
       return(
        <div>
            <span onMouseOver={props.incrementcouter}>Hovered {props.count} times</span>
        </div>
    )

}
export default UpdatedComponent(Hover);