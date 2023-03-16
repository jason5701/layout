import { Skeleton } from '@mui/material';

const ImagePlaceholder = ({ ...others }) => (
  <Skeleton variant='rectangular' {...others} animation='wave' />
);

export default ImagePlaceholder;
