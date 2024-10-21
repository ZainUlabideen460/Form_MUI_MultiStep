import React, { forwardRef, useImperativeHandle } from 'react';
import InputCom from '../components/InputCom';
import { MuiTelInput } from 'mui-tel-input';
import ReCAPTCHA from "react-google-recaptcha";

const Firststep = forwardRef(({ formdata={}, onChange,errors}, ref) => {
  useImperativeHandle(ref, () => ({
    validateForm() {
      if (!formdata.name || !formdata.email || !formdata.phoneno || !formdata.recaptcha) {
        return false;
      }
      return true;
    }
  }));

  return (
    <div>
      <form>
        <InputCom
          placeholder='Name'
          name='name'
          value={formdata.name}
          onChange={onChange}
          label='Name'
          disabled={!!formdata.name}
        />
    {errors.name && <p className='para-error'>{errors.name}</p>}
        <InputCom
          type="email"
          placeholder='Email'
          name='email'
          value={formdata.email}
          onChange={onChange}
          label='Email'
          disabled={!!formdata.email}

        />
        {
          errors.email && <p className='para-error'>{errors.email}</p>
        }
        <MuiTelInput
          name='phoneno'
          value={formdata.phoneno}
          onChange={(value) => onChange('phoneno', value)} // Ensure proper handling of value
          defaultCountry="PK"
        />
        {errors.phoneno && <p className='para-error'>{errors.phoneno}</p>}
        <ReCAPTCHA
          sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
          onChange={onChange}
        />
        {/* {
          errors.recaptcha && <p className='para-error'>{errors.recaptcha}</p>
        } */}
        {/* {
          errors.phoneno && <p className='para-error'>{errors.phoneno}</p>
        } */}
      </form>
    </div>
  );
});

export default Firststep;
