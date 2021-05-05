import React from 'react';
import PropTypes from "prop-types";
const ProfileComp =(props)=>{
    
        const handleClick =e=>{
            e.preventDefault();
            alert(`${props.fullName}`);
        }
    
    return (
        <>
          <h1>Hi I am {props.fullName}</h1>
          <h1>{props.bio}</h1>
          <h1> and I am a {props.profession}</h1>
          <div>
              <button style={{height: 30, width: 60, marginBottom:20 , backgroundColor:'pink', border:'none', cursor:'pointer'}} onClick={handleClick}>
                  hola
              </button>
          </div>
          <div style={{marginBottom:20 }}> and this is my picture </div> {props.children}
 '
        </>
    )
  
}
ProfileComp.defaultProps ={
   alert:'vide'
};
ProfileComp.propTypes={
  fullName : PropTypes.string
};
export default ProfileComp;