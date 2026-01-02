'use client';
import { TextareaWrapper, Label, Textarea, ErrorText } from './styles';

interface FormTextareaProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
  rows?: number;
  required?: boolean;
  placeholder?: string;
}

const FormTextarea = ({
  label,
  name,
  value,
  onChange,
  error,
  rows = 6,
  required,
  placeholder,
}: FormTextareaProps) => {
  return (
    <TextareaWrapper>
      <Label htmlFor={name}>
        {label} {required && <span>*</span>}
      </Label>
      <Textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        hasError={!!error}
        rows={rows}
        required={required}
        placeholder={placeholder}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </TextareaWrapper>
  );
};

export default FormTextarea;
