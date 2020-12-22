import { useFormContext } from 'react-hook-form';
import Input from '../../../components/Input';

export default function BasicInfo() {
  const { register, errors } = useFormContext();

  return (
    <>
      <Input
        name="name"
        placeholder="Name"
        ref={register}
        error={errors.name?.message}
      />
      <Input
        name="email"
        placeholder="E-mail"
        ref={register}
        error={errors.email?.message}
      />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        ref={register}
        error={errors.password?.message}
      />
      <Input
        name="age"
        placeholder="Age"
        ref={register}
        error={errors.age?.message}
      />
    </>
  );
}
