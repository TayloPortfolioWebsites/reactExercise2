import React from 'react'
import PropTypes from 'prop-types'

const Button = ({color,text,onClick}) => {
    // const onClick = ()=>{
    //     alert('This is an example of an onClick event.');
    // }
  return (
    <button onClick={onClick} className='btn' style={{backgroundColor: color}}>{text}</button>
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