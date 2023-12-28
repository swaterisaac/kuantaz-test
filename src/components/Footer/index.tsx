import { HTMLAttributes } from 'react';
import CopyrightIcon from '@mui/icons-material/Copyright';
import Grid from '@mui/material/Grid';
import StyledContainer from './StyledContainer';
import StyledFooter from './StyledFooter';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import StyledCopyrightWrapper from './StyledCopyrightWrapper';

export type FooterProps = HTMLAttributes<HTMLDivElement>;
export default function Footer(props: FooterProps) {
  return (
    <StyledContainer maxWidth={'lg'}>
      <StyledFooter {...props}>
        <Grid alignContent={'center'} container justifyContent='space-between'>
          <Grid item>
            <WbSunnyIcon />
          </Grid>
          <Grid item>
            <StyledCopyrightWrapper>
              Creado por Isaac Rojas <CopyrightIcon />
            </StyledCopyrightWrapper>
          </Grid>
        </Grid>
      </StyledFooter>
    </StyledContainer>
  )
}