import { ApiData } from '@/utils/getFormData';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectProps } from '@mui/material/Select';

export type SelectApiData = ApiData & {
  items: NonNullable<ApiData['items']>
}
export type InputSelectProps = {
  formInput: SelectApiData;
  onChangeSelect: SelectProps<ApiData['value']>['onChange'];
}
export default function InputSelect({formInput, onChangeSelect}: InputSelectProps) {
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