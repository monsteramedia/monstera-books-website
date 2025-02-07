import socials from '@/content/socials';
import Link from 'next/link';
import { classNames } from '@/utils/functions';

export function Socials({ variant }) {
  let colorStyle = 'bg-black/85 hover:bg-black';
  const color = '#FFF'
  const secondaryColor = '#F0776E';

  switch (variant) {
    case 'secondary':
      colorStyle = 'bg-white/75 hover:bg-white';
      break;
    default:
      break;
  }

  const SocialIcon = ({ social }) => {
    const network = socials[social];

    return (
      <Link
        href={network.href}
        target='_blank'
        rel='noreferrer'
        className={classNames(
          'p-2 rounded-full transition-color duration-500',
          colorStyle
        )}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox={network.viewBox}
          height={18}
          fill={variant === 'secondary' ? secondaryColor : color}
          className='aspect-square'
        >
          <title>{network.name}</title>
          {network.pathData}
        </svg>
      </Link>
    );
  };

  return (
    <div className='flex items-center justify-center space-x-2 lg:space-x-4'>
      <SocialIcon social='x' />
      <SocialIcon social='nostr' />
      <SocialIcon social='instagram' />
      <SocialIcon social='linkedin' />
      <SocialIcon social='email' />
    </div>
  );
}
