import { classNames } from '@/utils/functions';

export function Container({ className='max-w-7xl', ...props }) {
  return (
    <div
      className={classNames('mx-auto px-8 sm:px-16 lg:px-24', className)}
      {...props}
    />
  );
}
