'use client'

import { useState } from 'react'
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
        <div className='flex min-h-full items-end justify-center p-4 sm:items-center sm:p-0'>
          <DialogPanel
            transition
            className='overflow-y-auto max-h-[80vh] relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-2xl sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95'
          >
            <div>
              <div className='text-center space-y-2'>
                <DialogTitle as='h3' className='text-xl font-semibold py-2'>
                  <Image
                    src={book.cover}
                    alt={book.title}
                    width={100}
                    height={150}
                    className='mx-auto mb-6'
                  />
                  {book.title}
                </DialogTitle>
                {book.description.map((description, index) => (
                  <div
                    key={index}
                    className='text-sm font-light text-grey text-justify'
                  >
                    <ReactMarkdown>{description}</ReactMarkdown>
                  </div>
                ))}
                <p className='text-base font-medium pt-4 pb-2'>Sobre o autor</p>
                {book.authorDescription.map((description, index) => (
                  <div
                    key={index}
                    className='text-sm font-light text-grey text-justify'
                  >
                    <ReactMarkdown>{description}</ReactMarkdown>
                  </div>
                ))}
              </div>
            </div>
            <div className='mt-5 sm:mt-6 flex justify-center pt-2'>
              <Button href={book.storeUrl}>Comprar</Button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
