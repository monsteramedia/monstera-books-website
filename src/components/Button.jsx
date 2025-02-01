import Link from 'next/link'
import { classNames } from '@/utils/functions';

export const Button = ({ href, className, ...props }) => {
  return href ? (
    <Link
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className={classNames(
        'text-white border border-2 border-white font-semibold py-2 px-8 rounded-sm hover:bg-white hover:text-black transition duration-300',
        className
      )}
      {...props}
    />
  ) : (
    <button
      type='button'
      className={classNames(
        'text-white border border-2 border-white font-semibold py-2 px-8 rounded-sm hover:bg-white hover:text-black transition duration-300',
        className
      )}
      {...props}
    />
  );
}
