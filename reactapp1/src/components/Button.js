import React from 'react'
import PropTypes from 'prop-types'

const Button = ({color,text,clickEvent}) => {
    // const clickEvent = ()=>{
    //     alert('This is an example of an onClick event.');
    // }
  return (
    <button onClick={clickEvent} className='btn' style={{backgroundColor: color}}>{text}</button>
  )
}

Button.defaultProps = {
    color: '#005'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string
}

export default Button