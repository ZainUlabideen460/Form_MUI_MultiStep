import React, { useLayoutEffect, useRef, useState } from 'react'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Formtask from '../components/Formtask';
import Firststep from './Firststep';
import Secoundstep from './Secoundstep';
import Thiredstep from './Thiredstep';
import FouthStep from './FourthStep';
import { useLocation } from 'react-router-dom';

const theme = createTheme();
const steps = ['.', 'Create an ad group', 'Create an ad', 'last complated '];

const Stepone = ({phoneno,recaptcha,gender,country,range}) => {

  const location =useLocation();
  const state = location.state;
  const name=state?.name;
  const email=state?.email;
 
  const [formdata,setformdata]=useState({
      name:name,
      email:email,
      phoneno:'+92',
      recaptcha:'',
      gender:'',
      country:'',
    range:20,
      filled:false,
      // isDisabled:false,

    }
  )
  console.log(formdata.range)

  const [errors, setErrors] = useState({
   
  });
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  

  const validateForm=()=>{
    const temperror={};
  let  isVaild = true;
    if(!formdata.name){
      temperror.name="Name is required";
      isVaild=false;
    // setformdata({isDisabled:true})
    }
    if(!formdata.email){
      temperror.email="Email is required";
      isVaild=false;
    }
    if(!formdata.phoneno || formdata.phoneno.trim()===""){
      temperror.phoneno="Phone number is required";
      isVaild=false;
    }
    // if(!formdata.recaptcha){
    //   temperror.recaptcha="Please verify reCAPTCHA";
    //   isVaild=false;
    // }
    
   
    setErrors(temperror);
  return isVaild;

  }
  const vaildataformsecond=()=>{
    let isVaild=true;
    const temperror={}
    if (!formdata.country ) {
      
      temperror.country="Country is required";
      isVaild=false;
      
    }
    if (!formdata.gender) {
      
      temperror.gender="Gender is required";
      isVaild=false;
      
    }
    setErrors(temperror);
    return isVaild;
  }
  const FourthStepfun=()=>{
    let isVaild=true;
    const temperror={}
    if (formdata.range === undefined || formdata.range === null) {
      temperror.range = "Age range is required";
      isVaild = false;
    }
    setErrors(temperror);
    return isVaild;
  };
  // const ThiredStepfun=()=>{
  //   const temperror={};
  //   const isVaild=true;
  //   if(!formdata.Siblings)
  //     {
  //       temperror.siblings="At least one sibling is required";
  //       isVaild=false;
  //     }
  //   setErrors(temperror);
  //   return isVaild;

  // }
  // const [name, setUserName] = useState('');
  // const [email, setEmail] = useState('');
  // const [phoneno, setPhone] = useState('');
  // const [recaptcha,setrecaptcha]= useState('');
  // const [gender, SetGender] = useState('');
  // const [country, setCountry] = useState('');

  // const [Range, setRange] = useState([]);
  const [Siblings, setSliblings] = useState('');
  const firstStepRef = useRef(null);
  const secondStepRef = useRef(null);
  const thirdStepRef = useRef(null);
  const fourthStepRef = useRef(null);


  // const handleChange=(e)=>{
  //  const values=e.target.value
  //   setformdata({...formdata,[e.target.name]:values})
  //   // setformdata({...formdata,value})
      
      
  // }



  const handleChange = (eOrFieldName, value) => {
  
    if (typeof eOrFieldName === 'object' && eOrFieldName.target) {
      
      const { name, value } = eOrFieldName.target;
      setformdata((prevData) => ({
        ...prevData,
        [name]: value
      }));
    } else {
      
      setformdata((prevData) => ({
        ...prevData,
        [eOrFieldName]: value
      }));
     
    }
    setErrors({
     
      name:"",
      email:"",
      phoneno:"",
      // recaptcha:"",
      gender:"",
      country:"",
      range:[],
      
    
    })
  };
  
  



  const isStepOptional = (step) => {
    return step === 2;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    if (activeStep === 0) {
      const isValid = validateForm(); // Validate all fields at once
      if (!isValid) return; 
    
    }
    if (activeStep === 1) {
      // const isValid = secondStepRef.current.vaildataformsecond();
      const isValid = vaildataformsecond();
      if (!isValid) return;  // Stop if validation fails
    }
    if (activeStep === 2) {
      const isVaild = thirdStepRef.current.ThiredStepfun();
      // const isVaild =ThiredStepfun();
      if (!isVaild) return; // Stop if validation fails
    }
    if (activeStep === 3) {
      // const isVaild = fourthStepRef.current.FourthStepfun();
      const isVaild =FourthStepfun();

      if (!isVaild) return; // Stop if validation fails
    }
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };
 
  
  const handleChangeSiblings = (siblings) => {
    setSliblings(siblings);

  }
  const handleReset = () => {
    setActiveStep(0);
    setformdata({
      name:'',
      email:'',
      phoneno:'',
      recaptcha:'',
      gender:'',
      country:'',
     
    })

  };

  const getDate=()=>{
    var today = new Date(),
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    return date;
  }


  return (
    <div className="">
      <div className='flex justify-between mx-6 mt-10'>
      <div>
      {
        state ?(<><p className='flex'><h1>Name::</h1> <span className='ml-2'>{state.name}</span></p>
          <p className='flex'><h1>Email : </h1> <span className='ml-2'>{state.email}</span></p>
</>):(
          <p>
            no data present
          </p>
        )
      }
      </div>
      <div>
Date:{getDate()}
      </div>
      </div>
       

      <Box sx={(theme) => ({
        width: '35%',
        marginX: 'auto',
        background: '#fff',
        marginTop: '80px',
        padding: '60px 30px',
        borderRadius: "5px",


        '@media (max-width: 1000px)': {
          width: '50%',
          padding: '80px 40px',
        },
        '@media (max-width: 1200px)': {
          width: '50%',
          padding: '80px 40px',
        },
        '@media (max-width: 800px)': {
          width: '60%',
          padding: '80px 40px',
        },
        '@media (max-width: 650px)': {
          width: '70%',
          padding: '80px 40px',
        },

      })}

      >
        
        <div className='mx-auto pt-3 mb-10 register-heading'>Registeration Form</div>
        <Stepper
          activeStep={activeStep}
          sx={{
            '& .MuiStepLabel-label': {
              display: 'none',
            },
            '& .MuiStepConnector-line': {
              borderColor: 'gray',
            },
            '& .MuiStepConnector-root.Mui-active .MuiStepConnector-line': {
              borderColor: 'blue',
            },
            '& .MuiStepConnector-root.Mui-completed .MuiStepConnector-line': {
              borderColor: 'blue',
            },
          }}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
              // labelProps.optional = (
              //   // <Typography variant="caption">Optional</Typography>
              // );
            }

            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps} >
                <StepLabel {...labelProps} sx={{
                  '& .MuiStepLabel-label': {
                    display: 'none',
                  }

                }}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
              <br />
              Name: {formdata.name}
              <br />
              Email: {formdata.email}
              <br />
              Phone: {formdata.phoneno}
              <br />
              Gender :{formdata.gender}
              <br />
              Country:{formdata.country}
              <br />
              Age  Range: {formdata.range}
              <br />
              Siblings: {Siblings.join(', ')}
            </Typography>
            <Typography>
              {/* email:{email},
            password:{password} */}

            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
            <Box>
              {activeStep === 0 && (
                <Firststep ref={firstStepRef}  
                formdata={formdata}
                onChange={handleChange}
                errors={errors}
              

                
                />

              )}
               {activeStep === 1 && (
                <Secoundstep ref={secondStepRef} 
                formdata={formdata}
                onChange={handleChange}
                errors={errors}
                
                 />

              )} 
               {activeStep === 2 && (
                <Thiredstep ref={thirdStepRef} onSiblingsChange={handleChangeSiblings}
                siblings={Siblings}
                
                />

              )} 

              {
                activeStep === 3 && (
                  <FouthStep ref={fourthStepRef} onChange={handleChange} 
                  errors={errors}
                  />

                )
              }

            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )}
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>

    
    </div>
  );
}



export default Stepone
