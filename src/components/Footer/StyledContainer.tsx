'use client';

import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';

const StyledContainer = styled(Container)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.light,
  color: 'white'
}));

export default StyledContainer;