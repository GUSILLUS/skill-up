import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from '@mui/material';
import { useField } from 'formik';
import { ChangeEvent, FC } from 'react';

type CheckboxProps = {
  name: string;
  label: string;
  legend: string;
};

export const FormikCheckbox: FC<CheckboxProps> = ({ name, label, legend }) => {
  const [field, meta, { setValue }] = useField(name);

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { checked } = evt.target;
    setValue(checked);
  };

  return (
    <FormControl error={meta && meta.touched && !!meta.error}>
      <FormLabel component="legend">{legend}</FormLabel>
      <FormGroup>
        <FormControlLabel control={<Checkbox {...field} onChange={handleChange} />} label={label} />
      </FormGroup>
    </FormControl>
  );
};
