import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button.js'

const Header = ({title, onAdd, showAdd}) => {
    // const clickEvent = ()=>{
    //     alert('This is an example of an onClick event.');
    // }
  return (
    <header className='header'>
        <h1 style={{textAlign: 'center', backgroundColor: 'yellow', color: 'blue'}}>
            RBSL TO-DO-APP
        </h1>
        <Button text={showAdd ? 'Close' : 'Add tasks'} color={showAdd ? 'red' : 'green'} clickEvent={onAdd}/>
        {/* <Button text={'Delete'} color={'red'}/>
        <Button text={'Create'} /> */}
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