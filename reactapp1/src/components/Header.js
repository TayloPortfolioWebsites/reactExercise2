import React from 'react'

const Header = (props) => {
  return (
    <header>
        <h1 style={{textAlign: 'center'}}>
            REACT TO DO LIST APP
        </h1>
        <h1 style={{textAlign: 'center'}}>
            {props.title}
        </h1>
    </header>
  )
}

export default Header