import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button.js'

const Header = ({title}) => {
    const onClick = ()=>{
        alert('This is an example of an onClick event.');
    }
  return (
    <header className='header'>
        <h1 style={{textAlign: 'center', backgroundColor: 'yellow', color: 'blue'}}>
            RBSL TO-DO-APP
        </h1>
        <Button text={'Add'} color={'green'} onClick={onClick}/>
        <Button text={'Delete'} color={'red'}/>
        <Button text={'Create'} />
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