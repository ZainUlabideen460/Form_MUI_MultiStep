import React, { useState } from 'react';
import './Form.css';
import Button from './Button';
import InputCom from './InputCom';
import RadioInputCom from './RadioInputCom';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import { MuiTelInput } from 'mui-tel-input';


function Formtask(props) {
    const [formdata, setformdata] = useState({
        name: '',
        email: '',
        phoneno: '+92',
        country: '',
        gender: '',
        siblings: []
    });

    const [filled, setFilled] = useState({
        namefilled: false,
        emailfilled: false,
        phonenofilled: false,
        countryfilled: false,
        genderfilled: false,
        siblingsfilled: false
    });

    const [currentSibling, setCurrentSibling] = useState('');
    const [gnederempty, setgenderempty] = useState('');



    const handleChange = (newPhone) => {
       
        const phoneDigits = newPhone.replace(/\D/g, '');

        if (phoneDigits.length > 12) {
            // alert('Please enter a valid 11-digit phone number');
            return;
        }

        setformdata(prevData => ({
            ...prevData,
            phoneno: newPhone
        }));
    };

    const handleButtonClick = (buttonName) => {
        switch (buttonName) {
            case '+':
                addSibling();
                break;
            case 'submit':
                handleSubmit();
                break;
            default:
                console.log(`Button ${buttonName} clicked`);
        }
    };

    const addSibling = () => {
        if (currentSibling.trim() !== '') {
            setformdata(prevData => ({
                ...prevData,
                siblings: [...prevData.siblings, currentSibling]
            }));
            setCurrentSibling('');
        }
    };

    const deleteSibling = (index) => {
        setformdata(prevData => ({
            ...prevData,
            siblings: prevData.siblings.filter((_, i) => i !== index)
        }));
    };

    const handleDelete = (index) => () => {
        deleteSibling(index);
    };

    const handleChangeFormData = (e) => {
        // e.preventDefault(); 
        setformdata({ ...formdata, [e.target.name]: e.target.value });
        setFilled(filled.namefilledfilled === false);
        setFilled(filled.emailfilled === false);
        setFilled(filled.phonenofilled === false);
        setFilled(filled.countryfilled === false);
        setFilled(filled.genderfilled === false);
        setFilled(filled.siblingsfilled === false);

    };

    const handleSiblingInputChange = (e) => {
        e.preventDefault();
        setCurrentSibling(e.target.value);
        setFilled(filled.siblingsfilled === false);
    };

    const handleSubmit = () => {
        const phoneDigits = formdata.phoneno.replace(/\D/g, '');

        // Validation steps
        if (!formdata.name) {
            setFilled(prev => ({ ...prev, namefilled: true }));
            return;
        }
        if (!formdata.email) {
            setFilled(prev => ({ ...prev, emailfilled: true }));
            return;
        }
        if (phoneDigits.length !== 11) {
            setFilled(prev => ({ ...prev, phonenofilled: true }));
            alert('Please enter a valid 11-digit phone number');
            return;
        }
        if (!formdata.country) {
            setFilled(prev => ({ ...prev, countryfilled: true }));
            return;
        }
        if (!formdata.gender) {
            setFilled(prev => ({ ...prev, genderfilled: true }));
            return;
        }
        if (formdata.siblings.length === 0) {
            setFilled(prev => ({ ...prev, siblingsfilled: true }));
            // alert('Please add at least one sibling');
            return;
        }

       
        console.log('Form submitted');
        alert('Form submitted');
        setgenderempty(null);

        setformdata({
            name: '',
            email: '',
            phoneno: '',
            country: '',
            gender: '', 
            siblings: []
        });
        setFilled({
            namefilled: false,
            emailfilled: false,
            phonenofilled: false,
            countryfilled: false,
            genderfilled: false,
            siblingsfilled: false
        });
        setgenderempty('');
    };
    return (
        <div className="main-class">
            <div className='main-div-form flex-col flex-wrap'>
                <h1 className='form-heading'>Registration Form</h1>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className=' mt-[-5px] '>



                        <InputCom
                            className='sm:w-[70%] w-[70%]'
                            placeholder='Name'
                            name='name'

                            onChange={handleChangeFormData}
                            value={formdata.name}
                            label='Name'
                        />
                        {
                            filled.namefilled && (<p className='para-error'>name is required</p>)
                        }

                    </div>
                    <div className='mt-[-10px] '>
                        <InputCom
                            type="email"
                            placeholder='Email'
                            name='email'
                            className='sm:w-[70%] w-[70%]'
                            onChange={handleChangeFormData}
                            value={formdata.email}
                            label='Email'
                        />
                        {
                            filled.emailfilled && (<p className='para-error'>please write the email</p>)
                        }
                    </div>
                    <div className='sm:w-[70%] w-[70%] flex justify-center items-center flex-col mx-auto mt-1'>
                        <h3 className='self-start font mb-2'>Phone No</h3>
                        <MuiTelInput
                            className='w-[100%]'
                            value={formdata.phoneno}
                            onChange={handleChange}
                        // required
                        />
                        {
                            filled.phonenofilled && (<p className='para-error'>please select the phone no</p>)
                        }
                    </div>
                    <div className=''>
                        <select
                            className='sm:w-[70%] w-[70%] bt-2 pb-2 mt-5 select-id'
                            // required
                            // className='w-[45%]'

                            name="country"
                            value={formdata.country}
                            onChange={handleChangeFormData}
                        >
                            <option value="">Select Country</option>
                            <option value="pakistan">Pakistan</option>
                            <option value="india">India</option>
                            <option value="other">Other</option>
                        </select>
                        {filled.countryfilled && <p className='para-error'> please select the country</p>}
                    </div>
                    <div className='sm:w-[70%] w-[70%] flex justify-center items-center flex-col mx-auto '>
                        <h3 className='self-start  mt-2 font'>Gender</h3>
                        <div className='flex justify-center flex-wrap gap-3 mt-2  gender-radio '>
                            <div className='flex gap-2'> <RadioInputCom
                                type="radio"
                                id="male"
                                name="gender"
                                value="male"
                                //    gnederempty
                                checked={formdata.gender === 'male'}
                                onChange={handleChangeFormData}
                            />
                                <label htmlFor="male">Male</label></div>
                            <div className='flex gap-2'><RadioInputCom
                                type="radio"
                                id="female"
                                name="gender"
                                value="female"

                                onChange={handleChangeFormData}
                                checked={formdata.gender === 'female'}
                            />
                                <label htmlFor="female">Female</label></div>
                            <div className='flex gap-2'><RadioInputCom
                                type="radio"
                                id="other"
                                name="gender"
                                value="other"

                                onChange={handleChangeFormData}
                                checked={formdata.gender === 'other'}
                            />
                                <label htmlFor="other">Other</label></div>




                            {
                                filled.genderfilled && (<p className='para-error'> please select the gender</p>)
                            }
                        </div>
                    </div>
                    <div className='sm:w-[70%] w-[70%] flex justify-center items-center flex-col mx-auto'>
                        <h3 className='self-start font mt-2'>Siblings</h3>
                        <Paper
                            component="ul"
                            sx={{
                                display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', listStyle: 'none', p: 0.5, m: 0
                            }}
                        >
                            {formdata.siblings.map((sibling, index) => (
                                <li key={index}>
                                    <Chip
                                        label={sibling || 'New Sibling'}
                                        onDelete={handleDelete(index)}
                                        sx={{ margin: 0.5 }}

                                    />
                                </li>
                            ))}
                        </Paper>
                        {filled.siblingsfilled && <p className='para-error'>please select Atleast one Siblings</p>}

                        <div className='flex justify-center items-center sm:w-[100%] sibling-input'>
                            <InputCom
                                className=" "
                                id='input-sibling'
                                placeholder='Add Sibling'
                                value={currentSibling}
                                onChange={handleSiblingInputChange}

                            />


                            <Button
                                type="button"
                                className="btn w-[70px] h-[35px]"
                                onClick={handleButtonClick}
                                name="+"
                            />

                        </div>
                        {/* <input
                            type="hidden"
                            value={formdata.siblings.join(',')}
                            onChange={() => { }}
                        /> */}
                    </div>
                    <Button
                        type="submit"
                        name="submit"
                        className="btn sm:w-[70%] w-[70%] pt-2 pb-2 mt-4 mb-3"
                        onClick={handleSubmit} />
                </form>
            </div>
        </div>
    );
}

export default Formtask;
