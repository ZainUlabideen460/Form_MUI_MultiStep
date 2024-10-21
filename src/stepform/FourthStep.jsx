import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';



const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 10,
    label: '10',
  },
  {
    value: 20,
    label: '20',
  },
  {
    value: 30,
    label: '30',
  },
  {
    value: 40,
    label: '40',
  },
  {
    value: 50,
    label: '50',
  },
  {
    value: 60,
    label: '60',
  },
  {
    value: 70,
    label: '70',
  },
  {
    value: 80,
    label: '80',
  },
  {
    value: 90,
    label: '90',
  },
  {
    value: 100,
    label: '100',
  },
];

function valuetext(value) {
  return `${value}`;
}
const FouthStep = React.forwardRef(({ formdata = {}, onChange, errors }, props, ref) => {
  const [sliderValue, setSliderValue] = React.useState(formdata.range || 20); // Local state for slider value

  React.useImperativeHandle(ref, () => ({
    FourthStepfun() {
      return sliderValue !== undefined && sliderValue !== null;
    }
  }));

  const handleRangeChange = (event, newValue) => {
    setSliderValue(newValue);
    onChange('range', newValue); // Assuming this updates formdata.range correctly
  };
  

  return (
    <Box sx={{ width: "92%", marginLeft: "15px" }}>
      <h1 className='flex self-start font mb-2'>Select Age Range</h1>
      <Slider
        aria-label="Custom marks"
        value={sliderValue} // Use local state
        getAriaValueText={valuetext}
        step={10}
        valueLabelDisplay="auto"
        marks={marks}
        onChange={handleRangeChange}
      />
      {errors.range && (
        <p className='para-error'>Please select age range</p>
      )}
    </Box>
  );
});


export default FouthStep;
