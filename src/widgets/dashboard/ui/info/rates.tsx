import { Fragment } from 'react/jsx-runtime';

import { formatCurrency } from '@/shared/lib/format-currency';
import { Divider } from '@/shared/ui/divider';
import { Flex } from '@/shared/ui/flex';
import { Text } from '@/shared/ui/text';

type Props = {
  rates: { name: string; price: number }[];
};

export const DashboardRates = ({ rates }: Props) => {
  return (
    <Flex
      col
      className='rounded-3xl bg-gradient-to-b from-foreground/70 to-foreground/50 flex-shrink-0 p-8'
      gap={8}
      width={411}
    >
      <Text className='uppercase text-background' size={15} weight={700}>
        Тарифы, доступные на данном ПК
      </Text>
      <Divider className='text-background/15' />
      {rates.map(({ name, price }) => (
        <Fragment key={name}>
          <Flex center className='justify-between'>
            <Text className='text-background' opacity={0.8} size={13}>
              {name}
            </Text>
            <Text className='text-background' size={17} weight={700}>
              {formatCurrency(price)}
            </Text>
          </Flex>
          <Divider className='text-background/15' />
        </Fragment>
      ))}
    </Flex>
  );
};
