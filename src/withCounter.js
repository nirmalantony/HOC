import React from 'react';

const WithCounter = (Originalcomponent)=>
{

    const NewComponent = ()=>
    {
        let [count,setcount] = React.useState(0);
        const updatecount=()=>
         {
             setcount(count+1);
         }
        return <Originalcomponent count = {count} incrementcouter = {updatecount}></Originalcomponent>;
    }
    return NewComponent;
}

export default WithCounter;