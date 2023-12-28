import { ApiData } from '@/utils/getFormData';
import { useEffect, useMemo, useRef } from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';

export type InputTextProps = {
  formInput: ApiData;
  onChangeText: TextFieldProps['onChange'];
}
export default function InputText({ formInput, onChangeText }: InputTextProps) {
  const validation = useMemo(() => {
    if (formInput.validation === 'email') {
      return {
        message: 'La dirección de correo electrónico no es válida',
        regex: '[a-z0-9._%+\\-]+@[a-z0-9.\\-]+\\.[a-z]{2,4}$'
      };
    }
    return undefined;
  }, [formInput.validation]);

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (!inputRef.current || !validation) {
      return;
    }
    inputRef.current.pattern = validation.regex;
    if (!inputRef.current.value.match(validation.regex)) {
      return inputRef.current.setCustomValidity(validation.message);
    }
    inputRef.current.setCustomValidity('');
  }, [inputRef.current, inputRef.current?.value, validation]);

  return (
    <TextField
      disabled={formInput.disabled}
      inputRef={inputRef}
      onChange={onChangeText}
      fullWidth
      key={formInput.label}
      label={formInput.label}
      required={formInput.isRequired}
      value={formInput.value}
    />
  )
}