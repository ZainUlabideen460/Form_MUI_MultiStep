import React from 'react'
import './Form.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
const InputCom = ({ placeholder, name, onChange, value, className,onKeyDown, error,type,label,disabled}) => {
    return (
        <div>

            <Box sx={{ '& > :not(style)': { m: 1     } }} >
                <TextField placeholder={placeholder}
                    name={name}
                    type={type}
                    onChange={onChange}
                    value={value}
                    onKeyDown={onKeyDown}
                    disabled={disabled} 
             // required
            //  sx={{
            //     // Root class for the input field
            //     "& .MuiOutlinedInput-root": {
            //       color: "#100",
            //       fontFamily: "Arial",
            //       fontWeight: "10px",
            //       // Class for the border around the input field
            //       "& .MuiOutlinedInput-notchedOutline": {
            //         borderColor: "#2e2e2e",
            //         borderWidth: "2px",
            //       },
            //     },
            //     // Class for the label of the input field
            //     "& .MuiInputLabel-outlined": {
            //       color: "#2e2e2e",
            //       fontWeight: "bold",
            //     },
            //   }}
                    className={`input-com ${className} ${error ? 'error' : ''}`} id="standard-basic"
                    label={label} variant="standard" />
            </Box>
        </div>
    )
}

export default InputCom
