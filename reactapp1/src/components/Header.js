import React from 'react'
import PropTypes from 'prop-types'

const Header = ({title}) => {
  return (
    <header>
        <h1 style={{textAlign: 'center', backgroundColor: 'yellow', color: 'blue'}}>
            RBSL TO-DO-APP
        </h1>
        <h2 style={headingStyles}>
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

const headingStyles = {
    textAlign: 'center',
    backgroundColor: 'red',
    color: 'pink'
}

export default Header