import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { userSchema } from '../../validators/userSchema';

import BasicInfo from '../../modules/user/register/BasicInfo';
import AddressInfo from '../../modules/user/register/AddressInfo';

interface FormState {
  name: string;
  email: string;
  password: string;
  age: string;
  country: string;
  city: string;
  state: string;
  number: string;
  address: string;
  phone: string;
}

const state: FormState = {
  name: '',
  email: '',
  password: '',
  age: '',
  country: '',
  city: '',
  state: '',
  address: '',
  number: '',
  phone: ''
};

export default function UserRegisterContext() {
  const methods = useForm({
    resolver: yupResolver(userSchema),
    defaultValues: state,
    mode: 'onBlur'
  });

  const onSubmit = (data: FormState) => console.log(data);

  return (
    <FormProvider {...methods}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '300px',
        padding: 10,
        justifyContent: 'center',
      }}>
        <div>
          <h2>User Register</h2>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <BasicInfo />
            <AddressInfo /> <br />
            <input type="submit" value="Register" />
          </form>
        </div>
      </div>
    </FormProvider>
  )
}