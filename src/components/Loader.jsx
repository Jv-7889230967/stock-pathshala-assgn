import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

const Loader = () => {
  return (
    <Box  width={300} marginBottom={2}>
      <Skeleton variant="rectangular" width={250} height={180} />
      <Skeleton width={150} />
      <Skeleton width={150} />
    </Box>
  );
};

export default Loader;
