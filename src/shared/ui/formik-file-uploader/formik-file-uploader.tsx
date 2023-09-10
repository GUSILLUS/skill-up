import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { Avatar, FormLabel, IconButton, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { Field } from 'formik';
import { SimpleFileUpload } from 'formik-mui';

type Props = {
  name: string;
  url: string;
  errors?: string;
};

export const FormikFileUploader = ({ name, url, errors }: Props) => {
  return (
    <>
      <Stack direction="column" alignItems="center" spacing={2}>
        <div className="flex">
          <IconButton color="primary" aria-label={name} component={FormLabel}>
            <div className="hidden">
              <Field
                className="hidden"
                component={SimpleFileUpload}
                accept="image/png, image/jpeg,"
                name={name}
                type="file"
              />
            </div>
            {url ? (
              <ChangeCircleIcon sx={{ width: '60px', height: '60px' }} />
            ) : (
              <PhotoCamera sx={{ width: '60px', height: '60px' }} />
            )}
          </IconButton>
          {url && <Avatar src={url} alt="Uploaded Image" variant="rounded" sx={{ width: 100, height: 100 }} />}
        </div>

        {errors && (
          <Typography variant="subtitle2" color="error">
            {errors}
          </Typography>
        )}
      </Stack>
    </>
  );
};
