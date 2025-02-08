'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { classNames } from '@/utils/functions';

import books from '@/content/books';
import { Modal } from './Modal';

export function Accordion() {
  const [selectedBook, setSelectedBook] = useState(
    books.find((book) => book.id === 1)
  );
  const [hoveredBook, setHoveredBook] = useState(
    books.find((book) => book.id === 1)
  );
  const [showModal, setShowModal] = useState(false);

  const ImageAccordionClick = (book) => {
    setSelectedBook(book);
    setShowModal(true);
  };

  const ImageAccordionItem = ({
    book,
    onClick,
  }) => {
    return (
      <div className='flex hover:cursor-pointer h-full' onClick={onClick}>
        <Image
          src={book.cover}
          alt={book.title}
          className={classNames(
            'overflow-x-hidden h-full w-auto shadow-sm',
            `${book.id === hoveredBook.id ? 'block' : 'hidden'}`,
          )}
        />
        <Image
          onMouseEnter={() => setHoveredBook(book)}
          src={book.lateralCover}
          alt={book.title}
          className={classNames(
            'overflow-x-hidden h-full w-auto shadow-sm',
            `${book.id === hoveredBook.id ? 'hidden' : 'block'}`,
          )}
        />
      </div>
    );
  };

  const ImageAccordion = () => {
    return (
      <>
        {books.map((book) => (
          <ImageAccordionItem
            key={`accordion-${book.id}`}
            book={book}
            onClick={() => ImageAccordionClick(book)}
          />
        ))}
      </>
    );
  };

  return (
    <div className='h-[calc(100vh-144px)] mx-auto flex items-center justify-center'>
      <ImageAccordion />
      <Modal book={selectedBook} show={showModal} setShow={setShowModal} />
    </div>
  );
}
