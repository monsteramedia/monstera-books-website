import Image from 'next/image';
import logo from '@/images/monstera-logo.svg';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';

export function Navbar() {
  return (
    <nav className='bg-black'>
      <Container className='flex gap-8 items-center justify-between h-32 sm:h-36 relative'>
        <Image src={logo} alt='Monstera Books' className='w-40 md:w-44' />
        <Button
          href='https://shop.freemadeira.org/collections/monstera-books'
          className='shadow-darkGrey'
        >
          LOJA
        </Button>
      </Container>
    </nav>
  );
};
