import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, FormikProps, Field, FieldProps } from 'formik';

import { SignInInitialFormValues, TSignInInitialFormValues } from '../model/sign-in-form-values';

import { Button } from '@/shared/ui/button';
import { Flex } from '@/shared/ui/flex';
import { InputPassword, InputPhone } from '@/shared/ui/inputs';

export const SignInForm = () => {
  const nav = useNavigate();

  const handleAuth = (
    values: TSignInInitialFormValues,
    actions: FormikProps<TSignInInitialFormValues>,
  ) => {
    localStorage.setItem('access', 'true');
    nav('/profile/dashboard');
  };

  return (
    <Formik initialValues={SignInInitialFormValues} onSubmit={handleAuth}>
      {({ values: { phone, password } }) => (
        <Form className='w-full flex flex-col gap-12'>
          <Flex center col gap={6}>
            <Field name='phone'>
              {({ field }: FieldProps) => (
                <InputPhone {...field} label='Номер телефона' placeholder='8 (932) 050 55 55' />
              )}
            </Field>

            <Field name='password'>
              {({ field }: FieldProps) => (
                <InputPassword {...field} label='Пароль' placeholder='Введите пароль' />
              )}
            </Field>

            <Link className='text-xs' to='/'>
              Забыли пароль?
            </Link>
          </Flex>

          <Button color='primary' isDisabled={phone === '' || password === ''} type='submit'>
            ВОЙТИ
          </Button>
        </Form>
      )}
    </Formik>
  );
};
