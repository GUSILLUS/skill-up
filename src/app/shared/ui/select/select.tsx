import React, { ChangeEvent, FC } from 'react';
import { TextField, MenuItem } from '@material-ui/core';
import { useField, useFormikContext } from 'formik';

interface SelectOption {
  [key: string]: string;
}

interface SelectWrapperProps {
  name: string;
  options: SelectOption;
  label: string;
}

export const SelectWrapper: FC<SelectWrapperProps> = ({
  name,
  options,
  ...otherProps
}) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    setFieldValue(name, value);
  };

  const configSelect = {
    ...field,
    ...otherProps,
    select: true,
    variant: 'outlined',
    fullWidth: true,
    error: false,
    helperText: '',
    onChange: handleChange
  };

  if (meta && meta.touched && meta.error) {
    configSelect.error = true;
    configSelect.helperText = meta.error;
  }

  return (
    <TextField {...configSelect}>
      {Object.keys(options).map((item, pos) => {
        return (
          <MenuItem key={pos} value={item}>
            {options[item]}
          </MenuItem>
        )
      })}
    </TextField>
  );
};