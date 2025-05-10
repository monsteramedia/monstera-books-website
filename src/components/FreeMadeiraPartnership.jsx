import Image from "next/image";
import freeMadeira from '@/images/free-monstera.svg';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';

export function FreeMadeiraPartnership() {
  return (
    <Container className='min-h-[calc(100vh-144px)] mx-auto w-screen flex flex-col items-center justify-center text-center gap-8 md:gap-6 py-20'>
      <Image
        src={freeMadeira}
        alt='FREE Madeira and Monstera Books'
        className='w-60 md:w-64 pb-4 md:pb-8'
      />
      <div className="flex flex-col gap-4 md:gap-6">
        <p className='text-black text-xl md:text-2xl'>
          Tudo sobre Bitcoin, pela FREE Madeira e Monstera Books.
        </p>
        <p className='text-grey font-light text-sm md:text-base'>
          De livros a hardware, roupa a acessórios, encontra aqui os teus
          essenciais de Bitcoin.
        </p>
      </div>
      <Button
        href='https://shop.freemadeira.org/collections/monstera-books'
        className='mt-4'
        variant='secondary'
      >
        LOJA
      </Button>
    </Container>
  );
}
