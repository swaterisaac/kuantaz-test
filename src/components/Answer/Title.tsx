import Grid from '@mui/material/Grid';
import Link from 'next/link';
import Button from '@mui/material/Button';
import ArrowBack from '@mui/icons-material/ArrowBack';

export default function Title() {
  return (
    <Grid container>
      <Grid item lg={4}>
        <Link href='/'>
          <Button variant='contained' startIcon={<ArrowBack />}>Volver atrás</Button>
        </Link>
      </Grid>
      <Grid item lg={8}>
        <h1>Respuestas del formulario dinámico</h1>
      </Grid>
    </Grid>
  )
}