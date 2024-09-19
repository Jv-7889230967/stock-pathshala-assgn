import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

const Loader = () => {
  return (
    <Box  width={300} marginBottom={2}>
      <Skeleton animation="wave" variant="rectangular" width={250} height={180} />
      <Skeleton animation="wave" width={150} />
      <Skeleton animation="wave" width={150} />
    </Box>
  );
};

export default Loader;
