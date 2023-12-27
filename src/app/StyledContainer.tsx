'use client';

import { styled } from '@mui/material/styles';
import { Container }from '@mui/material';

const StyledContainer = styled(Container)(({theme}) => ({
    backgroundColor: theme.palette.background.default
}));

export default StyledContainer;