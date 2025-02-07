import Link from 'next/link';
import { classNames } from '@/utils/functions';

export const Button = ({ href, className, variant, ...props }) => {
  let buttonColorStyle =
    'border-salmon text-salmon hover:bg-salmon hover:text-white';

  switch (variant) {
    case 'secondary':
      buttonColorStyle =
        'border-white text-white hover:bg-white hover:text-salmon';
      break;
    default:
      break;
  }

  className = classNames(
    'border border-2 font-semibold py-2 px-8 rounded-md transition-colors duration-500 shadow-md',
    className,
    buttonColorStyle
  );

  return href ? (
    <Link
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className={className}
      {...props}
    />
  ) : (
    <button type='button' className={className} {...props} />
  );
};
