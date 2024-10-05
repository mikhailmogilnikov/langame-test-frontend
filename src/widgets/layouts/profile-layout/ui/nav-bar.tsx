import { Link } from 'react-router-dom';
import { Fragment } from 'react/jsx-runtime';

import { ProfileNavRoutes } from '../config/profile-nav-routes';

import { LogoLogin } from '@/shared/assets/svg/logo-login';
import { Divider } from '@/shared/ui/divider';
import { Flex } from '@/shared/ui/flex';
import { Text } from '@/shared/ui/text';

export const ProfileNavBar = () => {
  return (
    <Flex center col className='pt-16 flex-shrink-0' gap={8} tag='nav' width={250}>
      <Link to='/profile/dashboard'>
        <LogoLogin />
      </Link>

      <Flex col gap={0}>
        <Divider />
        {ProfileNavRoutes.map(({ name, icon, focus, href }) => (
          <Fragment key={name}>
            <Link
              key={name}
              className='h-32 flex flex-col gap-4 items-center justify-center hover:bg-default/50 transition-colors'
              to={href}
            >
              <div className='relative'>
                {icon}
                {focus && (
                  <div className='absolute -top-2 -right-2 w-1.5 h-1.5 bg-danger rounded-full' />
                )}
              </div>

              <Text size={13} weight={700}>
                {name}
              </Text>
            </Link>
            <Divider />
          </Fragment>
        ))}
      </Flex>
    </Flex>
  );
};
