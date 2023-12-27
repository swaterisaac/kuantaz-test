import Form, { FormProps } from './Form';
import Grid  from '@mui/material/Grid';
import Title from './Title';

export type HomeProps = FormProps

export default function Home({ formInputs }: HomeProps) {
  return (
    <Grid container spacing={2}>
      <Title />
      <Form formInputs={formInputs}/>
    </Grid>
  )
}