'use client';

import { ApiBody } from '@/utils/getFormData';
import Grid from '@mui/material/Grid';
import StyledCard from './StyledCard';
import SubmitButton from './SubmitButton';
import TextField from '@mui/material/TextField';
import { ChangeEvent, useCallback, useState } from 'react';
import { useSearchParams } from 'next/navigation';

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

	return (
		<Grid item lg={12}>
			<StyledCard>
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
			</StyledCard>
		</Grid>
	)
}