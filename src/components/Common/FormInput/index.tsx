'use client';
import { InputWrapper, Label, Input, ErrorText } from './styles';

interface FormInputProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'tel';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  placeholder?: string;
}

const FormInput = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  error,
  required,
  placeholder,
}: FormInputProps) => {
  return (
    <InputWrapper>
      <Label htmlFor={name}>
        {label} {required && <span>*</span>}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        hasError={!!error}
        required={required}
        placeholder={placeholder}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </InputWrapper>
  );
};

export default FormInput;
