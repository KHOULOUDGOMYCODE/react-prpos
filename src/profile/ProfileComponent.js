import React from 'react';
import ChildrenComponent from './ChildrenComponent';
import PropTypes from 'prop-types';
const image='image.jpg'



const ProfileComponent=({name, bio, profession,HandleName})=>{
    return (<div>
     <h3 style={{color: "red",display:'inline'}}> Name:</h3>  {name}   
      <h3 style={{color: "red"}}> Biography: </h3> <br />
      <div style={{ marginRight:'800px' , textAlign:'justify'}}>{bio}</div> <br />
      <h3 style={{color: "red",display:'inline'}}> Profession:</h3> {profession}  
        <ChildrenComponent image={image}/>
        <span>{HandleName} </span>
        </div>

)
};


ProfileComponent.propTypes={
    name:PropTypes.string,
    bio:PropTypes.string,
    profession:PropTypes.string,
    ChildrenComponent:PropTypes.string,
    HandleName:PropTypes.func};
    
    export default ProfileComponent;
