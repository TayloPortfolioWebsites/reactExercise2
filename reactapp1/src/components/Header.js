import React from 'react'
import PropTypes from 'prop-types'

const Header = ({title}) => {
  return (
    <header>
        <h1 style={{textAlign: 'center'}}>
            RBSL TO-DO-APP
        </h1>
        <h2 style={{textAlign: 'center'}}>
            {title}
        </h2>
    </header>
  )
}

Header.defaultProps = {
    title: 'REACT TO DO APP'
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header