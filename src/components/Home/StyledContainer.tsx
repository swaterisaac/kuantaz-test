'use client';

import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';

const StyledContainer = styled(Container)(({theme}) => ({
    backgroundColor: theme.palette.background.default,
    paddingBottom: 16,
    paddingTop: 16
}));

export default StyledContainer;