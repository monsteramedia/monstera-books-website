import Image from 'next/image';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import logo from '@/images/monstera-books-logo-white.png';

export function Footer() {
  return (
    <nav className='bg-red-300 py-8'>
      <Container className='flex flex-col gap-8 items-center justify-between'>
        <Image src={logo} alt='Monstera Books' className='w-48 md:w-64' />
        <Button className='hover:text-red-300' href='https://shop.freemadeira.org/collections/monstera-books'>
          LOJA
        </Button>
        <p className='text-white text-sm'>
          © 2025 Monstera Media, todos os direitos reservados.
        </p>
      </Container>
    </nav>
  );
};
