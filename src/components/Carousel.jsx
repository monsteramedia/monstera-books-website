'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { classNames } from '@/utils/functions';
import books from '@/content/books';
import { Modal } from './Modal';

export function Carousel({ className }) {
  const [selectedBook, setSelectedBook] = useState(
    books.find((book) => book.id === 1)
  );
  const [showModal, setShowModal] = useState(false);
  const [x, setX] = useState(0);
  const [showClickCue, setShowClickCue] = useState(false);

  const scrollContainerRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [initialMouseX, setInitialMouseX] = useState(0);
  const dragThreshold = 5; // Threshold for drag detection
  const horizontalShiftCue = -150;

  const handleMouseDown = (event) => {
    setIsDown(true);
    setStartX(event.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    setInitialMouseX(event.pageX); // Store initial mouse position
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = (event) => {
    setIsDown(false);

    // Check if the mouse moved beyond the threshold
    const mouseMoved = Math.abs(event.pageX - initialMouseX) > dragThreshold;
    if (mouseMoved) {
      setShowModal(false);
    } else {
      const clickedBook = books.find((book) => book.id === selectedBook.id);
      if (clickedBook) {
        setSelectedBook(clickedBook);
        setShowModal(true);
      }
    }
  };

  const handleMouseMove = (event) => {
    if (!isDown) return;
    event.preventDefault();
    const x = event.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    const shiftTimer = setTimeout(() => {
      setX(horizontalShiftCue);

      const resetPositionTimer = setTimeout(() => {
        setX(0);

        const showCueTimer = setTimeout(() => {
          setShowClickCue(true);

          const resetCueTimer = setTimeout(() => {
            setShowClickCue(false);
          }, 1000);

          return () => clearTimeout(resetCueTimer);
        }, 1000);

        return () => clearTimeout(showCueTimer);
      }, 1000);

      return () => clearTimeout(resetPositionTimer);
    }, 1000);

    return () => clearTimeout(shiftTimer);
  }, []);

  const handleKeyDown = (event, book) => {
    if (event.key === 'Enter' || event.key === ' ') {
      setSelectedBook(book);
      setShowModal(true);
    }
  };

  return (
    <div
      ref={scrollContainerRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      className={classNames(
        'h-[calc(100vh-128px)] sm:h-[calc(100vh-144px)] overflow-x-auto scrollbar-hide whitespace-nowrap',
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
            onClick={() => {
              setSelectedBook(book);
            }}
            onKeyDown={(event) => handleKeyDown(event, book)}
            className={classNames(
              'group relative inline-block h-full w-auto shadow-sm',
              isDown ? 'cursor-grabbing' : 'cursor-grab'
            )}
          >
            <Image
              src={book.cover}
              alt={book.title}
              className={classNames(
                'inline-block h-full w-auto shadow-sm undragable'
              )}
            />
            <div
              className={classNames(
                'flex items-center justify-center absolute inset-0 bg-black sm:opacity-0 sm:group-hover:opacity-50 transition-opacity duration-300 pointer-events-none',
                showClickCue ? 'opacity-50' : 'opacity-0'
              )}
            >
              <p className='text-white font-medium'>
                Pressiona para ver detalhes do livro
              </p>
            </div>
          </button>
        ))}
      </motion.div>
      <Modal book={selectedBook} show={showModal} setShow={setShowModal} />
    </div>
  );
}
