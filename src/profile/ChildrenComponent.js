import React from 'react';

const ChildrenComponent = ({image}) =>{
    return(<div>

<img src= {image}style={{height:'400px', width:'500px', marginLeft:'700px',position:'absolute',top:'30px' }} alt="" />
</div>
    )
}

export default ChildrenComponent;