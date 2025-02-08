import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { Button } from './Button'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown';

export function Modal({ book, show, setShow }) {
  return (
    <Dialog open={show} onClose={setShow} className='relative z-10'>
      <DialogBackdrop
        transition
        className='fixed inset-0 bg-grey/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in'
      />

      <div className='fixed inset-0 z-10 w-screen'>
        <div className='flex min-h-full items-center justify-center p-4 sm:items-center'>
          <DialogPanel
            transition
            className='relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 h-[80vh] sm:w-full sm:max-w-5xl sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95'
          >
            <div className='flex flex-col sm:flex-row gap-8 justify-center items-center h-full'>
              <div className='flex flex-col items-center justify-center h-full hidden sm:flex'>
                <Image
                  src={book.cover}
                  alt={book.title}
                  className='min-w-56 mb-4'
                />
                <Button href={book.storeUrl} className='w-full text-center'>
                  Comprar
                </Button>
              </div>
              <div className='flex flex-col space-y-2 h-full overflow-y-auto scrollbar-hide'>
                <DialogTitle
                  as='h3'
                  className='sticky top-0 bg-white text-xl font-semibold py-4 w-full text-center'
                >
                  {book.title}
                </DialogTitle>
                <Image
                  src={book.cover}
                  alt={book.title}
                  className='max-w-40 block sm:hidden pb-8 mx-auto'
                />
                {book.description.map((description, index) => (
                  <div
                    key={`description-${index}`}
                    className='text-sm font-light text-grey text-justify'
                  >
                    <ReactMarkdown>{description}</ReactMarkdown>
                  </div>
                ))}
                <p className='text-base font-medium pt-8 pb-4 text-center'>Sobre o autor</p>
                {book.authorDescription.map((description, index) => (
                  <div
                    key={`author-${index}`}
                    className='text-sm font-light text-grey text-justify last:mb-8'
                  >
                    <ReactMarkdown>{description}</ReactMarkdown>
                  </div>
                ))}
                <Button
                  href={book.storeUrl}
                  className='w-full text-center sticky bottom-0 bg-white sm:hidden'
                >
                  Comprar
                </Button>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
