import { InputSelectProps } from './InputSelect';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup, { RadioGroupProps } from '@mui/material/RadioGroup';

export type InputRadioProps = Pick<InputSelectProps, 'formInput'> & {
  onChangeRadio: RadioGroupProps['onChange'];
}
export default function InputRadio({formInput, onChangeRadio}: InputRadioProps) {
  return (
    <FormControl>
      <FormLabel id={`radio-label-${formInput.label}`}>{formInput.label}</FormLabel>
      <RadioGroup
        onChange={onChangeRadio}
        key={formInput.label}
        row
        value={formInput.value}
      >
        {formInput.items.map((item) =>
          <FormControlLabel
            aria-labelledby={`radio-label-${formInput.label}`}
            control={<Radio />}
            disabled={formInput.disabled}
            label={item.value}
            key={item.id}
            required={formInput.isRequired}
            value={item.id}
          />)}
      </RadioGroup>
    </FormControl>
  )
}