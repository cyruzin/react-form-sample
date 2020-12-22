import { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    name,
    placeholder,
    error,
    ...rest
  } = props;

  return (
    <>
      <input name={name} placeholder={placeholder} ref={ref} {...rest} />
      {error && <p style={{ color: 'red', fontSize: 13 }}>{error}</p>}
    </>
  )
});

export default Input;