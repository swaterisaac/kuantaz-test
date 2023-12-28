'use client';

import { ApiBody, ApiData } from '@/utils/getFormData';
import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { SelectChangeEvent } from '@mui/material';
import { useRouter } from 'next/navigation';
import Grid from '@mui/material/Grid';
import StyledCard from './StyledCard';
import SubmitButton from './SubmitButton';
import DynamicInput from './DynamicInput';

export type FormProps = {
  formInputs: ApiBody;
}
export default function Form({ formInputs }: FormProps) {
  const [state, setState] = useState(formInputs);

  const changeState = (value: string, index: number) => {
    setState([
      ...state.slice(0, index),
      {
        ...state[index],
        value: value,
      },
      ...state.slice(index + 1)
    ]);
  }

  const onTextChangeHandler = useCallback((index: number) => (event: ChangeEvent<HTMLInputElement>) => {
    changeState(event.target.value, index);
  }, [changeState]);

  const onSelectChangeHandler = useCallback((index: number) => (event: SelectChangeEvent<ApiData['value']>) => {
    changeState(event.target.value, index);
  }, [changeState]);

  const onRadioChangeHandler = useCallback((index: number) => (event: ChangeEvent<HTMLInputElement>) => {
    changeState(event.target.value, index);
  }, [changeState]);

  const router = useRouter();
  const onSubmitHandler = useCallback((event: FormEvent) => {
    event.preventDefault();
    let queryParams = '';
    for (const formInput of state) {
      if (formInput.value) {
        queryParams += `${formInput.name}=${formInput.value}&`;
      }
    }

    queryParams = queryParams.slice(0, -1);
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
                  <DynamicInput 
                    formInput={formInput}
                    onChangeRadio={onRadioChangeHandler(index)}
                    onChangeSelect={onSelectChangeHandler(index)}
                    onChangeText={onTextChangeHandler(index)}
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