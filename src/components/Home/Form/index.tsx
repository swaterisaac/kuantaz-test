'use client';

import { ApiBody } from '@/utils/getFormData';
import Grid from '@mui/material/Grid';
import StyledCard from './StyledCard';
import SubmitButton from './SubmitButton';
import TextField from '@mui/material/TextField';
import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';

export type FormProps = {
  formInputs: ApiBody;
}
export default function Form({ formInputs }: FormProps) {
  const [state, setState] = useState(formInputs);

  const onChangeHandler = useCallback((index: number) => (event: ChangeEvent<HTMLInputElement>) => {
    setState([
      ...state.slice(0, index),
      {
        ...state[index],
        value: event.target.value,
      },
      ...state.slice(index + 1)
    ]);
  }, [state]);

  const router = useRouter();
  const onSubmitHandler = useCallback((event: FormEvent) => {
    event.preventDefault();
    let queryParams = '';
    for (const formInput of state) {
      if(formInput.value) {
        queryParams += `${formInput.name}=${formInput.value}`;
      }
    }

    router.push(`/respuesta?${queryParams}`);
  }, [state]);

  return (
    <Grid item lg={12}>
      <StyledCard>
        <form onSubmit={onSubmitHandler}>
          <Grid container spacing={2}>
            {state.map(
              (formInput, index) =>
                <Grid item key={formInput.label} lg={6} xs={12}>
                  <TextField
                    disabled={formInput.disabled}
                    onChange={onChangeHandler(index)}
                    fullWidth
                    key={formInput.label}
                    label={formInput.label}
                    required={formInput.isRequired}
                    value={formInput.value}
                  />
                </Grid>
            )}
          </Grid>
          <SubmitButton />
        </form>
      </StyledCard>
    </Grid>
  )
}