'use client';

import React from 'react';
import Image from 'next/image';

import books from '@/content/books';

const ImageAccordionItem = ({ coverSrc, lateralSrc, altText }) => {
  return (
    <div className='flex group hover:cursor-pointer'>
      <Image
        src={coverSrc}
        alt={altText}
        className='overflow-x-hidden h-[calc(100vh-144px)] hidden group-hover:block transition ease-in-out duration-500'
      />
      <Image
        src={lateralSrc}
        alt={altText}
        className='overflow-x-hidden h-[calc(100vh-144px)] block group-hover:hidden transition ease-in-out duration-500'
      />
    </div>
  );
};

const ImageAccordion = () => {
  return (
    <div className='flex h-9/12 w-2/3'>
      {books.map((book, index) => (
        <ImageAccordionItem
          key={index}
          coverSrc={book.cover}
          lateralSrc={book.lateralCover}
          altText={book.title}
        />
      ))}
    </div>
  );
};

export function Accordion() {
  return (
    <div className='h-[calc(100vh-144px)] mx-auto w-screen flex items-center justify-center'>
      <ImageAccordion />
    </div>
  );
};
