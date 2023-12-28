import InputText, { InputTextProps } from './InputText';
import InputSelect, { InputSelectProps } from './InputSelect';
import InputRadio, { InputRadioProps } from './InputRadio';

export type DynamicInputProps = InputTextProps &
   Pick<InputRadioProps, 'onChangeRadio'> & 
   Pick<InputSelectProps, 'onChangeSelect'>;

export default function DynamicInput({
  formInput,
  onChangeText,
  onChangeSelect,
  onChangeRadio
}: DynamicInputProps) {
  if (formInput.type === 'TextInput') {
    return <InputText formInput={formInput} onChangeText={onChangeText}/>
  }
  if (formInput.type === 'Select' && formInput.items) {
    return <InputSelect formInput={{...formInput, items: formInput.items}} onChangeSelect={onChangeSelect}/>
  }
  if (formInput.type === 'Radio' && formInput.items) {
    return <InputRadio formInput={{...formInput, items: formInput.items}} onChangeRadio={onChangeRadio}/>
  }

  return <div>Input inválido</div>
}