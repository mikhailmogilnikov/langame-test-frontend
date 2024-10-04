import { Link } from 'react-router-dom';

import { FooterLinks } from '../config/footer-links';

import { Flex } from '@/shared/ui/flex';
import { LgTag } from '@/shared/assets/svg/tag';

export const AuthLayoutFooter = () => {
  return (
    <Flex
      center
      col
      className='absolute bottom-4 left-1/2 -translate-x-1/2'
      tag='footer'
      width='min-width'
    >
      <Flex>
        {FooterLinks.map(({ name, path }) => (
          <Link key={name} className='text-xs' to={path}>
            {name}
          </Link>
        ))}
      </Flex>
      <LgTag />
    </Flex>
  );
};
