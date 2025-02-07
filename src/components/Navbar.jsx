import Image from 'next/image';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import logo from '@/images/monstera-books-logo-white.png';

export function Navbar() {
  return (
    <nav className='bg-black'>
      <Container className='flex gap-8 items-center justify-between h-36 relative'>
        <Image src={logo} alt='Monstera Books' className='w-48 md:w-64' />
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
