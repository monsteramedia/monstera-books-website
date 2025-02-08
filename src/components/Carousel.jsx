'use client';
import { classNames } from '@/utils/functions';
import React, { useState } from 'react';
import books from '@/content/books';
import Image from 'next/image';
import { Modal } from './Modal';

export function Carousel({className}) {
  const [selectedBook, setSelectedBook] = useState(
    books.find((book) => book.id === 1)
  );

  const [showModal, setShowModal] = useState(false);

  const ImageAccordionClick = (book) => {
    setSelectedBook(book);
    setShowModal(true);
  };

  return (
   <div
     className={classNames(
       'h-[calc(100vh-144px)] overflow-x-auto scrollbar-hide whitespace-nowrap',
       className
     )}
   >
     {books.map((book) => (
       <Image
         key={book.id}
         src={book.cover}
         alt={book.title}
         className={classNames('inline-block h-full w-auto shadow-sm')}
         onClick={() => ImageAccordionClick(book)}
       />
     ))}
    <Modal book={selectedBook} show={showModal} setShow={setShowModal} />
   </div>
  );
}
