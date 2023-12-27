import { Button, Grid, TextField } from '@mui/material';

export type ApiData = {
  disabled: boolean;
  isRequired: boolean;
  label: string;
  name: string;
  type: string;
  value: string;
};

export type Body = {
  data: Array<ApiData>
};

async function getData(): Promise<Body> {
  const res = await fetch('https://run.mocky.io/v3/3f3de857-cd4e-4901-8ff7-14b7b9024aac')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const text = (await res.text())
    .replace(/'/g, '"')
    .replace(/label/g, '"label"')
    .replace(/name/g, '"name"')
    .replace(/isRequired/g, '"isRequired"')
    .replace(/disabled/g, '"disabled"')
    .replace(/type/g, '"type"')
    .replace(/value/g, '"value"')
    .replace(/null,/g, 'null');
  return JSON.parse(text);
}

export default async function Home() {
  const body = await getData();

  return (
    <Grid container spacing={2}>
      <Grid item lg={12}>
        <h1>Formulario dinámico para Kuantaz</h1>
      </Grid>
      {body.data.map(
        data =>
          <Grid item key={data.label} lg={6} xs={12}>
            <TextField
              disabled={data.disabled}
              fullWidth
              key={data.label}
              label={data.label}
              required={data.isRequired}
            >
              {data.name}
            </TextField>
          </Grid>
      )}
      <Grid item justifyItems='flex-end'>
        {/* <Button variant='contained'>Enviar</Button> */}
      </Grid>
    </Grid>
  )
}
