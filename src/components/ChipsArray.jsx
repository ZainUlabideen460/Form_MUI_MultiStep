import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import React, { useState } from 'react';
import { parsePhoneNumber } from 'react-phone-number-input'
import { MuiTelInput } from 'mui-tel-input'


function ChipsArray () {
  // `value` will be the parsed phone number in E.164 format.
  // Example: "+12133734253".
// `value` will be the parsed phone number in E.164 format.
  // Example: "+12133734253".
  const [phone, setPhone] = React.useState('')

  const handleChange = (newPhone) => {
    setPhone(newPhone)
  }
  return (
    <MuiTelInput value={phone} onChange={handleChange} />
  )
}
export default ChipsArray