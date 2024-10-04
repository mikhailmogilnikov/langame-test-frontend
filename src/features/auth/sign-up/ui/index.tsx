import { PiArrowLeftBold } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';
import { ReactNode, useState } from 'react';

import { ESignupForms } from '../model/signup-forms.enum';

import { SignUpFormFull } from './form-full';

import { Flex } from '@/shared/ui/flex';
import { Button } from '@/shared/ui/button';
import { Text } from '@/shared/ui/text';

export const SignUpFormBody = () => {
  const nav = useNavigate();

  const [activeForm, setActiveForm] = useState(ESignupForms.FULL);

  const handleNavBack = () => {
    nav('/profile/dashboard');
  };

  const forms: Record<ESignupForms, ReactNode> = {
    [ESignupForms.FULL]: <SignUpFormFull />,
    [ESignupForms.SIMPLE]: <div className='h-96 mb-28'>Простая форма</div>,
  };

  return (
    <Flex center col className='max-w-[638px]' gap={12}>
      <Text size={25} tag='h1' weight={700}>
        Регистрация
      </Text>

      <Flex className='max-w-96' gap={6}>
        <Button
          color={activeForm === ESignupForms.FULL ? 'primary' : 'default'}
          size='sm'
          onClick={() => setActiveForm(ESignupForms.FULL)}
        >
          ПОЛНАЯ
        </Button>
        <Button
          color={activeForm === ESignupForms.SIMPLE ? 'primary' : 'default'}
          size='sm'
          onClick={() => setActiveForm(ESignupForms.SIMPLE)}
        >
          УПРОЩЕННАЯ
        </Button>
      </Flex>

      {forms[activeForm]}

      <Button variant='bordered' onClick={handleNavBack}>
        <PiArrowLeftBold size={22} />
        ВЕРНУТЬСЯ НА ГЛАВНУЮ
      </Button>
    </Flex>
  );
};
