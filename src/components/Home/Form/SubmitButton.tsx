import { Grid } from '@mui/material';
import StyledButton from './StyledButton';

export default function SubmitButton() {
  return (
    <Grid container justifyContent='end'>
      <Grid item>
        <StyledButton variant='contained'>Confirmar</StyledButton>
      </Grid>
    </Grid>
  )
}