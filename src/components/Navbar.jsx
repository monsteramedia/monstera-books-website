import Image from 'next/image';
import { Button } from '@/components/Button';
import logo from '@/images/monstera-books-logo-white.png';

export function Navbar() {
  return (
    <nav className='bg-black'>
      <div className='flex gap-8 items-center justify-between px-8 md:px-12 lg:px-20 h-36 relative'>
        <div>
          <Image src={logo} alt='Monstera Books' className='w-48 md:w-64' />
        </div>
        <p className='text-white text-sm hidden md:block'>
          Livros em português sobre economia, liberdade, literacia financeira,
          tecnologia e Bitcoin.
        </p>
        <div>
          <Button href='https://shop.freemadeira.org/collections/monstera-books'>
            LOJA
          </Button>
        </div>
      </div>
    </nav>
  );
};
