import React from 'react';
import UpdatedComponent from './withCounter';

const Click = (props)=>
{
    return(
        <div>
          <span>clicked {props.count} times</span> 
          <input  type="button" value="Submit" onClick={props.incrementcouter}/> 
        </div>
    )
}

export default  UpdatedComponent(Click);