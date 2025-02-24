'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { classNames } from '@/utils/functions';
import books from '@/content/books';
import { Modal } from './Modal';

export function Accordion({ className }) {
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

  const ImageAccordionItem = ({ book, onClick }) => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        onClick();
      }
    };

    return (
      <button
        type='button'
        className='flex hover:cursor-pointer h-full'
        onClick={onClick}
        onKeyDown={handleKeyDown}
      >
        {hoveredBook.id === book.id ? (
          <div
            key={`cover-${book.id}`}
            className='overflow-x-hidden h-full w-auto shadow-sm border border-slate-100/50'
          >
            <Image
              src={book.cover}
              alt={book.title}
              className='h-full w-auto'
            />
          </div>
        ) : (
          <div
            key={`lateralCover-${book.id}`}
            className='overflow-x-hidden h-full w-auto shadow-sm border border-slate-100/50'
          >
            <Image
              onMouseEnter={() => setHoveredBook(book)}
              src={book.lateralCover}
              alt={book.title}
              className='h-full w-auto'
            />
          </div>
        )}
      </button>
    );
  };

  const ImageAccordion = () => {
    return (
      <div className='h-[calc(95vh-144px)] mx-auto flex items-center justify-center'>
        {books.map((book) => (
          <ImageAccordionItem
            key={`accordion-${book.id}`}
            book={book}
            onClick={() => ImageAccordionClick(book)}
          />
        ))}
      </div>
    );
  };

  return (
    <div
      className={classNames(
        'h-[calc(100vh-144px)] mx-auto flex items-center justify-center',
        className
      )}
    >
      <ImageAccordion />
      <Modal book={selectedBook} show={showModal} setShow={setShowModal} />
    </div>
  );
}
