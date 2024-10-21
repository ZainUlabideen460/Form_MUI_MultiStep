import React from 'react'

const RadioInputCom = ({ name, onChange, value,type,id,checked }) => {
  return (
    <div>
      <input name={name}
                    type={type}
                    id={id}
                    value={value}
                    checked={checked}
                    onChange={onChange}
                    // required
                    />
    </div>
  )
}

export default RadioInputCom
