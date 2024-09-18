import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function AlertDisplay({title,severity}) {
  return (
    <Stack sx={{ width: '40%'}} spacing={2}>
      <Alert variant="outlined" severity={severity}>
       {title}
      </Alert>
    </Stack>
  );
}
