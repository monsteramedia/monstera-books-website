'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { classNames } from '@/utils/functions';

import books from '@/content/books';
import { Modal } from './Modal';

export function Accordion() {
  const [selectedBook, setSelectedBook] = useState(books[0]);
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const ImageAccordionClick = (book) => {
    setSelectedBook(book);
    setShowModal(true);
  };

  const ImageAccordionItem = ({
    index,
    coverSrc,
    lateralSrc,
    altText,
    onClick,
  }) => {

    return (
      <div
        className='flex group hover:cursor-pointer'
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={coverSrc}
          alt={altText}
          className={classNames(
            'overflow-x-hidden h-[calc(100vh-144px)]',
            `${
              index === 0
                ? isHovered
                  ? 'hidden'
                  : 'block'
                : 'hidden'
            }`,
            `${
              index === 0
                ? isHovered
                  ? 'group-hover:block'
                  : 'group-hover:hidden'
                : 'group-hover:block'
            }`
          )}
        />
        <Image
          src={lateralSrc}
          alt={altText}
          className={classNames(
            'overflow-x-hidden h-[calc(100vh-144px)]',
            `${
              index === 0
                ? isHovered
                  ? 'block'
                  : 'hidden'
                : 'block'
            }`,
            `${
              index === 0
                ? isHovered
                  ? 'group-hover:hidden'
                  : 'group-hover:block'
                : 'group-hover:hidden'
            }`
          )}
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
            index={index}
            coverSrc={book.cover}
            lateralSrc={book.lateralCover}
            altText={book.title}
            onClick={() => ImageAccordionClick(book)}
          />
        ))}
      </div>
    );
  };

  return (
    <div className='h-[calc(100vh-144px)] mx-auto w-screen flex items-center justify-center'>
      <ImageAccordion />
      <Modal book={selectedBook} show={showModal} setShow={setShowModal} />
    </div>
  );
}
