'use client';
import { classNames } from '@/utils/functions';
import React, { useState, useEffect } from 'react';
import books from '@/content/books';
import Image from 'next/image';
import { Modal } from './Modal';
import { motion } from 'framer-motion';

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

  return (
    <div
      className={classNames(
        'h-[calc(100vh-144px)] overflow-x-auto scrollbar-hide whitespace-nowrap',
        className
      )}
    >
      <motion.div
      className='h-full'
        animate={{ x }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
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
      </motion.div>
      <Modal book={selectedBook} show={showModal} setShow={setShowModal} />
    </div>
  );
}
