import { classNames } from '@/utils/functions';

export function Container({ className = 'max-w-7xl', ...props }) {
  return (
    <div
      className={classNames('mx-auto px-6 sm:px-12 lg:px-16', className)}
      {...props}
    />
  );
}
