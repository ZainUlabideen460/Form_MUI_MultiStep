import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import RadioInputCom from '../components/RadioInputCom';

const Secoundstep = forwardRef(({formdata={},onChange,errors}, ref) => {
    // const [country, setcountry] = useState(props.country ||'');
    // const [gender, setgender] = useState(props.gender ||'');
    // const [FilledCountry, setfilledcountry] = useState(false);
    // const [filledGender, setfilledGender] = useState(false);
    // useEffect(() => {
    //     setgender(props.gender || '');
    //     setcountry(props.country || '');
    // }, [props.gender, props.country]);

    

    useImperativeHandle(ref, () => ({
        vaildataformsecond() {
            if (!formdata.country ||!formdata.gender) {
                
                return false;
            }
          
            return true;

        }
    }));
  

    return (
        <div>
            <div className='sm:w-[92%] w-[70%] flex justify-center items-center flex-col mx-auto '>
                <h1 id="outlined-basic" className='self-start  mt-3 font pb-2'>Select Country</h1>
                <select
                    className='sm:w-[99%] w-[70%] py-2'
                    // required
                    // className='w-[45%]'

                    name="country"
                    value={formdata.country}
                    onChange={onChange}
                >
                    <option value="">Country</option>
                    <option value="pakistan">Pakistan</option>
                    <option value="india">India</option>
                    <option value="other">Other</option>
                </select>{
                    errors.country &&
                    <p className='para-error'> please select the country</p>
                }
            </div>


            <div className='sm:w-[92%] w-[70%] flex justify-center items-center flex-col mx-auto '>
                <h3 className='self-start  mt-5 font'>Gender</h3>
                <div className='flex justify-center flex-wrap gap-5 mt-1  gender-radio '>
                    <div className='flex gap-3'> <RadioInputCom
                        type="radio"
                        id="male"
                        name="gender"
                        value="male"
                        //    gnederempty
                        checked={formdata.gender === 'male'}
                        onChange={onChange}
                    />
                        <label htmlFor="male">Male</label></div>
                    <div className='flex gap-2'><RadioInputCom
                        type="radio"
                        id="female"
                        name="gender"
                        value="female"

                        onChange={onChange}
                        checked={formdata.gender === 'female'}
                    />
                        <label htmlFor="female">Female</label></div>
                    <div className='flex gap-2'><RadioInputCom
                        type="radio"
                        id="other"
                        name="gender"
                        value="other"

                        onChange={onChange}
                        checked={formdata.gender === 'other'}
                    />
                        <label htmlFor="other">Other</label></div>
                        {

console.log(formdata.gender)
                        }

                </div>
                {
                    errors.gender &&
                    <p className='para-error'> please select the gender</p>
                }
            </div>

        </div>
    )
});

export default Secoundstep
