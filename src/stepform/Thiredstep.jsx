import React, { forwardRef, useImperativeHandle, useState } from 'react';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import InputCom from '../components/InputCom';
import { Button } from 'react-bootstrap';

const Thiredstep = forwardRef((props, ref) => {
  const [siblings, setSiblings] = useState(props.siblings || []);
  const [currentSibling, setCurrentSibling] = useState('');
  const [filledSibling, setFilledSibling] = useState(false);

  useImperativeHandle(ref, () => ({
    ThiredStepfun() {
      if (siblings.length === 0) {
        setFilledSibling(true);
        return;
      }
      return true;
    }
  }));

  const addSibling = () => {
    if (currentSibling.trim() !== '') {
      const updatedSiblings = [...siblings, currentSibling];
      setSiblings(updatedSiblings);
      setCurrentSibling('');
      props.onSiblingsChange(updatedSiblings);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      // event.preventDefault(); // Prevent form submission if inside a form
      addSibling(); // Call addSibling on Enter key press
    }
  };

  const deleteSibling = (index) => {
    setSiblings((prevData) => prevData.filter((_, i) => i !== index));
  };

  const handleDelete = (index) => () => {
    deleteSibling(index);
  };

  const handleSiblingInputChange = (e) => {
    const newSiblings = e.target.value;
    setCurrentSibling(newSiblings);
    setFilledSibling(false);
    props.onSiblingsChange(newSiblings);
  };

  return (
    <div>
      <div className='sm:w-[92%] w-[70%] flex justify-center items-center flex-col mx-auto'>
        <h3 className='self-start font mt-2'>Siblings</h3>
        <Paper
          component="ul"
          sx={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', listStyle: 'none', p: 0.5, m: 0
          }}
        >
          {siblings.map((sibling, index) => (
            <li key={index}>
              <Chip
                label={sibling || 'New Sibling'}
                onDelete={handleDelete(index)}
                sx={{ margin: 0.5 }}
              />
            </li>
          ))}
        </Paper>
        {filledSibling && <p className='para-error'>Please select at least one sibling</p>}
        <div className='flex justify-between items-center sm:w-[100%] w-[100%] mt-3 gap-0'>
          <InputCom
            className='sm:w-[80%] w-[80%] m-0'
            placeholder='Add Sibling'
            value={currentSibling}
            onChange={handleSiblingInputChange} 
            onKeyDown={handleKeyDown} // This handles Enter key
          />
          <Button
            type="button"
            className="btn w-[20%] h-[35px] m-0"
            onClick={addSibling}
        >
            Add
          </Button>
        </div>
      </div>
    </div>
  );
});

export default Thiredstep;
