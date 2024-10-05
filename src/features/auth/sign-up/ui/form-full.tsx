import { useNavigate } from 'react-router-dom';
import { PiUserCircleBold } from 'react-icons/pi';
import { Field, FieldProps, Form, Formik, FormikProps } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter'; // подключаем адаптер
import { useState } from 'react';

import {
  SignUpFullInitialFormValues,
  TSignUpFullInitialFormValues,
} from '../model/signup-form-values';
import { signUpSchema } from '../model/signup-schema';

import { Button } from '@/shared/ui/button';
import { Flex } from '@/shared/ui/flex';
import { Input, InputDate, InputPassword, InputPhone } from '@/shared/ui/inputs';
import { InputPassport } from '@/shared/ui/inputs/input-passport';
import { InputSelect } from '@/shared/ui/inputs/input-select';
import { Switch } from '@/shared/ui/switch';
import { Text } from '@/shared/ui/text';

export const SignUpFormFull = () => {
  const nav = useNavigate();

  const [isPressed, setIsPressed] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);

  const handleAuth = (
    values: TSignUpFullInitialFormValues,
    actions: FormikProps<TSignUpFullInitialFormValues>,
  ) => {
    localStorage.setItem('access', 'true');
    nav('/profile/dashboard');
  };

  return (
    <Formik
      initialValues={SignUpFullInitialFormValues}
      validateOnBlur={false}
      validateOnMount={false}
      validationSchema={toFormikValidationSchema(signUpSchema)}
      onSubmit={handleAuth}
    >
      {({ values, errors }) => (
        <Form className='w-full flex flex-col gap-12'>
          <Flex center col gap={8}>
            <Field name='fullName'>
              {({ field }: FieldProps) => (
                <Input
                  {...field}
                  icon={<PiUserCircleBold opacity={0.5} size={22} />}
                  isValid={isPressed ? !errors.fullName : undefined}
                  label='ФИО'
                  message={isPressed && errors.fullName}
                  placeholder='Введите полное имя'
                />
              )}
            </Field>

            <>{console.log(errors)}</>

            <div className='grid grid-cols-2 gap-8'>
              <Field name='phone'>
                {({ field }: FieldProps) => (
                  <InputPhone
                    {...field}
                    isValid={isPressed ? !errors.phone : undefined}
                    label='Номер телефона'
                    message={isPressed && errors.phone}
                    placeholder='8 (932) 050 55 55'
                    type='tel'
                  />
                )}
              </Field>

              <Field name='birthdate'>
                {({ field }: FieldProps<TSignUpFullInitialFormValues['birthdate']>) => (
                  <InputDate
                    {...field}
                    isValid={isPressed ? !errors.birthdate : undefined}
                    label='Дата рождения'
                    message={isPressed && errors.birthdate}
                  />
                )}
              </Field>

              <Field name='document'>
                {({ field }: FieldProps) => (
                  <InputSelect
                    isValid={isPressed ? !errors.document : undefined}
                    message={isPressed && errors.document}
                    {...field}
                    label='Документ'
                  />
                )}
              </Field>

              <Field name='documentId'>
                {({ field }: FieldProps) => (
                  <InputPassport
                    {...field}
                    autoComplete='off'
                    isValid={isPressed ? !errors.documentId : undefined}
                    label='Укажите 10 цифр серия и номер'
                    message={isPressed && errors.documentId}
                    placeholder='4125 231424'
                    type='text'
                  />
                )}
              </Field>

              <Field name='password'>
                {({ field }: FieldProps) => (
                  <InputPassword
                    {...field}
                    autoComplete='off'
                    isValid={isPressed ? !errors.password : undefined}
                    label='Укажите пароль'
                    message={isPressed && errors.password}
                    placeholder='Пароль'
                  />
                )}
              </Field>

              <Field name='confirmPassword'>
                {({ field }: FieldProps) => (
                  <InputPassword
                    {...field}
                    autoComplete='off'
                    isValid={isPressed ? !errors.confirmPassword : undefined}
                    label='Повторите пароль'
                    message={isPressed && errors.confirmPassword}
                    placeholder='Пароль'
                  />
                )}
              </Field>
            </div>
          </Flex>

          <Flex>
            <Switch isEnabled={isAgreed} onChange={() => setIsAgreed(!isAgreed)} />
            <Text size={13}>Даю согласие на информационную рассылку</Text>
          </Flex>

          <Button
            color='primary'
            isDisabled={Object.values(values).some((value) => value === '') || !isAgreed}
            type='submit'
            onClick={() => setIsPressed(true)}
          >
            ЗАРЕГИСТРИРОВАТЬСЯ
          </Button>
        </Form>
      )}
    </Formik>
  );
};
