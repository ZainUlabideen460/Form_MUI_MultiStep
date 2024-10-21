import React from 'react'
import './Form.css'

const Button = ({ id, type, className, onClick, name }) => {
  return (
      <button 
          id={id}
          type={type}
          className={className}
          onClick={() => onClick(name)} 
      >{name}
      </button>
    )
  }

export default Button
