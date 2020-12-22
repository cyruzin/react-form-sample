import { useFormContext } from 'react-hook-form';
import Input from '../../../components/Input';

export default function AddressInfo() {
  const { register, errors } = useFormContext();

  return (
    <>
      <Input name="country" placeholder="Country" ref={register} error={errors.country?.message} />
      <Input name="city" placeholder="City" ref={register} error={errors.city?.message} />
      <Input name="state" placeholder="State" ref={register} error={errors.state?.message} />
      <Input name="address" placeholder="Address" ref={register} error={errors.address?.message} />
      <Input name="number" placeholder="Number" ref={register} error={errors.number?.message} />
      <Input name="phone" placeholder="Phone" ref={register} error={errors.phone?.message} />
    </>
  )
}
