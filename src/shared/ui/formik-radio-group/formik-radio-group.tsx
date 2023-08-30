import React, { FunctionComponent } from 'react';
import { useFormikContext } from 'formik';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { Typography } from '@material-ui/core';

interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  label: string;
}

export const FormikRadioGroup: FunctionComponent<RadioGroupProps> = ({
  name,
  options,
  label,
}) => {
  const { setFieldValue } = useFormikContext();
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    setFieldValue(name, value);
  };

  return (
    <FormControl>
      <FormControlLabel label={label} control={<Typography />} className="mr-5 pl-3" />
      <RadioGroup name={name} onChange={handleChange} row className='p-2'>
        
        {options.map((option, index) => (
          <FormControlLabel
            key={index}
            value={option.value}
            control={<Radio />}
            label={option.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};