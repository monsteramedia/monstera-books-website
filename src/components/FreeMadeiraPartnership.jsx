import Image from "next/image";
import freeMadeira from '@/images/free-madeira-monstera-books.avif';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';

export function FreeMadeiraPartnership() {
  return (
    <Container className='h-[calc(100vh-144px)] mx-auto w-screen flex flex-col items-center justify-center text-center gap-4 md:gap-6'>
      <Image
        src={freeMadeira}
        alt='FREE Madeira and Monstera Books'
        className='w-72 md:w-80 pb-4 md:pb-8'
      />
      <p className='text-black text-2xl md:text-4xl'>
        Tudo sobre Bitcoin, pela FREE Madeira e Monstera Books
      </p>
      <p className='text-grey font-light text-base md:text-xl'>
        De livros a hardware, roupa a acessórios, encontre aqui os seus
        essenciais de Bitcoin.
      </p>
      <Button
        href='https://shop.freemadeira.org/collections/monstera-books'
        className='mt-4'
      >
        LOJA
      </Button>
    </Container>
  );
}
