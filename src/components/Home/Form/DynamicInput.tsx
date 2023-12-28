import { ApiData } from '@/utils/getFormData';
import { Fragment } from 'react';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import RadioGroup, { RadioGroupProps } from '@mui/material/RadioGroup';
import Select, { SelectProps } from '@mui/material/Select';
import TextField, { TextFieldProps } from '@mui/material/TextField';

export type DynamicInputProps = (TextFieldProps) & {
  onChangeText: TextFieldProps['onChange'];
  onChangeSelect: SelectProps<ApiData['value']>['onChange'];
  onChangeRadio: RadioGroupProps['onChange'];
  formInput: ApiData;
};

export default function DynamicInput({
  formInput,
  onChangeText,
  onChangeSelect,
  onChangeRadio
}: DynamicInputProps) {
  if (formInput.type === 'TextInput') {
    return <TextField
      disabled={formInput.disabled}
      onChange={onChangeText}
      fullWidth
      key={formInput.label}
      label={formInput.label}
      required={formInput.isRequired}
      value={formInput.value}
    />
  }
  if (formInput.type === 'Select' && formInput.items) {
    return (
      <FormControl fullWidth>
        <InputLabel id={`select-label-${formInput.label}`}>{formInput.label}</InputLabel>
        <Select
          disabled={formInput.disabled}
          fullWidth
          key={formInput.label}
          label={formInput.label}
          labelId={`select-label-${formInput.label}`}
          onChange={onChangeSelect}
          required={formInput.isRequired}
          value={formInput.value}
        >
          {formInput.items.map((item) => <MenuItem key={item.id} value={item.id}>{item.value}</MenuItem>)}
        </Select>
      </FormControl>
    )
  }
  if (formInput.type === 'Radio' && formInput.items) {
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

  return <div>Input inválido</div>
}