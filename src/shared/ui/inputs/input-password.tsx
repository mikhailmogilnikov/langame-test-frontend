import { forwardRef, useState } from 'react';
import { TbLock } from 'react-icons/tb';

import { InputWrapper } from './wrapper';
import { InputProps } from './input';

type Ref = HTMLInputElement;

export const InputPassword = forwardRef<Ref, InputProps>((props, ref) => {
  const { isDisabled } = props;

  const [isVisible, setIsVisible] = useState(false);

  const controllerClassname = 'flex-shrink-0 text-foreground text-xs font-bold uppercase';

  const controller = isVisible ? (
    <button
      className={controllerClassname}
      disabled={isDisabled}
      type='button'
      onClick={() => setIsVisible(false)}
    >
      Скрыть
    </button>
  ) : (
    <button
      className={controllerClassname}
      disabled={isDisabled}
      type='button'
      onClick={() => setIsVisible(true)}
    >
      Показать
    </button>
  );

  return (
    <InputWrapper icon={<TbLock opacity={0.5} size={22} />} {...props}>
      <>
        <input
          ref={ref}
          className='w-full bg-transparent outline-none font-bold'
          disabled={isDisabled}
          type={isVisible ? 'text' : 'password'}
          {...props}
        />
        {controller}
      </>
    </InputWrapper>
  );
});
