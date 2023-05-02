import React from 'react'

const Header = ({title}) => {
  return (
    <header>
        {/* <h1 style={{textAlign: 'center'}}>
            REACT TO DO LIST APP
        </h1> */}
        <h2 style={{textAlign: 'center'}}>
            {title}
        </h2>
    </header>
  )
}

Header.defaultProps = {
    title: 'React to do list app'
}

export default Header