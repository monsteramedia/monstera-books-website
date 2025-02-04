import Image from 'next/image';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Socials } from '@/components/Socials';
import logo from '@/images/monstera-books-logo-white.png';

export function Footer() {
  return (
    <nav className='bg-salmon py-12'>
      <Container className='flex flex-col items-center justify-center md:justify-between md:flex-row gap-8 md:gap-0'>
        <div className='flex items-center flex-col md:items-start lg:flex-row gap-4'>
          <Image src={logo} alt='Monstera Books' className='w-48 md:w-64' />
          <div className='flex flex-col justify-center text-center md:text-start gap-4'>
            <p className='text-white w-72'>
              Livros em português sobre economia, liberdade, literacia
              financeira, tecnologia e Bitcoin.
            </p>
            <p className='text-white text-sm'>© 2025 Monstera Media</p>
          </div>
        </div>
        <div className='flex flex-col justify-center md:items-end gap-8'>
          <Socials variant='secondary'/>
          <div className='flex items-center justify-center'>
            <Button
              variant='secondary'
              href='https://shop.freemadeira.org/collections/monstera-books'
            >
              LOJA
            </Button>
          </div>
        </div>
      </Container>
    </nav>
  );
}
