import React, {useState} from 'react';
import { TextField, Button, Container, Stack } from '@mui/material';
import { Link } from "react-router-dom"
 
 
const Exampl= () => {
   

  const [formdata,setformdata]=useState({
    name:'',
    email:'',
    phoneno:'',
    country:'',
    gender:'',
    siblings:[]
})

const [filled,setFilled ] = useState({
    namefilled:false,
    emailfilled:false,
    phonenofilled:false,
    countryfilled:false,
    genderfilled:false,
    siblingsfilled:false
});

const handleSiblingChange=(index,value)=>{
    const updatedSiblings=[...formdata.siblings];
    updatedSiblings[index]=value;
    setformdata(prevData => ({
        ...prevData,
        siblings: updatedSiblings
    }));
}

const addSibling = () => {
    if(!formdata.siblings){
        alert('Please select a sibling');
    }
    setformdata(prevData => ({
        ...prevData,
        siblings: [...prevData.siblings, ''] // Add a new empty entry
    }));
};
const handlechange=(e)=>{
    // const {name,value} = e.target
    // setformdata(preData=>{
    //     return {...preData,[name]:value}
    // })
    setformdata({...formdata,[e.target.name]:e.target.value})

    
    
    
}

const handleClick = (e) => {
     e.preventDefault();
    if(!formdata.name)
    {
      setFilled({namefilled:true});
    }
    else if(!formdata.email )
    {
        setFilled({emailfilled:true});
    }
    else if(!formdata.phoneno)
    {
        setFilled({phonenofilled:true});
    }
    else if(!formdata.country)
    {
        setFilled({countryfilled:true});
    }
    else if(!formdata.gender)
    {
        setFilled({genderfilled:true});
    }
    else if(formdata.siblings.some(sibling=>sibling===''))
    {
       
        setFilled({siblingsfilled:true});
    }
else{
    console.log('Form submitted');
    // alert('Form submitted',setformdata({...formdata}));
    alert('form submited',setformdata({...formdata}));
    console.log(formdata);
    setformdata({
        name:'',
        email:'',
        phoneno:'',
        country:'',
        gender:'',
        siblings:[]
      
    })
    }
  
    }
 
    return (
        <React.Fragment>
            <h2>Register Form</h2>
            <form onSubmit={handleClick}>
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        className={filled.namefilled ?'bgRed':'bgBlack' } placeholder='Name' name='name' onChange={handlechange} value={formdata.name}
                        fullWidth
                        required
                    />
                   
                </Stack>
                <TextField
                    type="email"
                    variant='outlined'
                    color='secondary'
                    className={filled.emailfilled ?'bgRed':'bgBlack' }  placeholder='Email' name='email'onChange={handlechange} value={formdata.email}
                    fullWidth
                    required
                    sx={{mb: 4}}
                />
                <TextField
                    type="number"
                    variant='outlined'
                    color='secondary'
                    label="Password"
                    className={filled.phonenofilled ?'bgRed':'bgBlack' }placeholder='Phone No' name='phoneno' onChange={handlechange} value={formdata.phoneno}
                    required
                    fullWidth
                    sx={{mb: 4}}
                />
                {/* <TextField
                    type="date"
                    variant='outlined'
                    color='secondary'
                    label="Date of Birth"
                    onChange={e => setDateOfBirth(e.target.value)}
                    value={dateOfBirth}
                    fullWidth
                    required
                    sx={{mb: 4}}
                /> */}
                     <select name="country" className={filled.countryfilled ?'bgRed':'bgBlack' } value={formdata.country} onChange={handlechange} >
                <option value="">Select Country</option>
                <option value="pakistan">Pakistan</option>
                <option value="india">India</option>
                <option value="other">Other</option>
            </select>
                <Button variant="outlined" color="secondary" type="submit">Register</Button>
            </form>
            
     
        </React.Fragment>
    )
}
 
export default Exampl;