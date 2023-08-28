import React, { ChangeEvent, FC } from 'react';
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel
} from '@material-ui/core';
import { useField, useFormikContext } from 'formik';

interface CheckboxWrapperProps {
  name: string;
  label: string;
  legend: string;
};

export const CheckboxWrapper: FC<CheckboxWrapperProps> = ({
  name,
  label,
  legend,
  ...otherProps
}) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { checked } = evt.target;
    setFieldValue(name, checked);
  };

  const configCheckbox = {
    ...field,
    onChange: handleChange
  };

  const configFormControl = { error: false };
  if (meta && meta.touched && meta.error) {
    configFormControl.error = true;
  }

  return (
    <FormControl {...configFormControl}>
      <FormLabel component="legend">{legend}</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox {...configCheckbox} />}
          label={label}
        />
      </FormGroup>
    </FormControl>
  );
};
