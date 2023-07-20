import { Box } from '@mui/material';
import { styled } from '@mui/system';

const DashboardBox = styled(Box)(({theme}) => ({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
  backgroundColor: theme.palette.background.light,
  borderRadius: '1rem',
  boxShadow: '0.5rem 0.2rem 0.1rem rgba(0,0,0,0.8)'
}));

export default DashboardBox;
