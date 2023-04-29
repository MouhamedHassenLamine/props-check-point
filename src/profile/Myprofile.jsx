import React from 'react'
import './Myprofile.css'
import  PropTypes from 'prop-types'
let namer="your name"
 function Myprofile(props) {
  return (
    <div>
      <div className='grandp'>
        <section className='slice1'>
        {/*the image*/}
        {props.children}
        {/*full name*/}
        <h3>{props.fullName}</h3>
        {/*profession*/}
        <h4>{props.profession}</h4>
        </section>
        <section className='slice2'>
        <h2>Information</h2>
        <hr/>
        <div className='pparent'>
        <h2 className='infot'>Email</h2>
        <h2 className='info'>Phone number</h2>
        </div>
        <div className='pparent'>
          {/*the email*/}
        <p>{props.Email}</p>
        {/*the phone number*/}
        <p>{props.Phone_number}</p>
        </div>
        <h2 className='bio'>Bio</h2>
        <hr/>
        <div className='biop'>
          {/*the bio*/}
        <p>{props.bio}</p>
        </div>
        <a href="#nothing special this time" onClick={showTheName}>Show more</a>
        </section>
      </div>
    </div>
  )
}
{/*props types*/}
Myprofile.propTypes={
  fullName:PropTypes.string,
  bio:PropTypes.string,
  profession:PropTypes.string,
  Email:PropTypes.string,
  Phone_number:PropTypes.string
}
{/*default props*/}
Myprofile.defaultProps={
  fullName:"your name",
  bio:"your bio",
  profession:"your profession",
  Email:"your email",
  Phone_number:"your phone number",
}
{/*function that alret the user name at the beginning*/}
function HandleName (props){
  alert(`your name is ${props.name}`)
  namer=props.name
}
 {/*function that show the name if you click on the link*/}
function showTheName(){
  alert( `your name is ${namer}`)
}
export {Myprofile,HandleName}