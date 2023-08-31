import { TextField, MenuItem } from '@mui/material';
import { useField } from 'formik';
import { ChangeEvent, FC } from 'react';

import { Option } from '../../types/option';

type SelectWrapperProps = {
  name: string;
  options: Option[];
  label: string;
};

export const FormikSelect: FC<SelectWrapperProps> = ({ name, options, label }) => {
  const [field, meta, { setValue }] = useField(name);

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    setValue(value);
  };

  return (
    <TextField
      {...field}
      label={label}
      select={true}
      variant="outlined"
      fullWidth
      error={meta && meta.touched && !!meta.error}
      onChange={handleChange}
      helperText={meta.error || ''}
    >
      {options.map(({ value, label }) => {
        return (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        );
      })}
    </TextField>
  );
};
