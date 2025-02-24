'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { classNames } from '@/utils/functions';
import books from '@/content/books';
import { Modal } from './Modal';

export function Carousel({className}) {
  const [selectedBook, setSelectedBook] = useState(
    books.find((book) => book.id === 1)
  );
  const [showModal, setShowModal] = useState(false);
  const [x, setX] = useState(0);

  const ImageAccordionClick = (book) => {
    setSelectedBook(book);
    setShowModal(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setX(-40);
      const timer = setTimeout(() => {
        setX(0);
      }, 1000);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      onClick();
    }
  };

  return (
    <div
      className={classNames(
        'h-[calc(100vh-144px)] overflow-x-auto scrollbar-hide whitespace-nowrap',
        className
      )}
    >
      <motion.div
        key='carousel'
        className='h-full'
        animate={{ x }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {books.map((book) => (
          <button
            key={book.id}
            type='button'
            onClick={() => ImageAccordionClick(book)}
            onKeyDown={handleKeyDown}
            className={classNames('inline-block h-full w-auto shadow-sm')}
          >
            <Image
              src={book.cover}
              alt={book.title}
              className={classNames('inline-block h-full w-auto shadow-sm')}
            />
          </button>
        ))}
      </motion.div>
      <Modal book={selectedBook} show={showModal} setShow={setShowModal} />
    </div>
  );
}
