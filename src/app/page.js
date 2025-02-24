import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Accordion } from '@/components/Accordion';
import { Carousel } from '@/components/Carousel';
import { FreeMadeiraPartnership } from '@/components/FreeMadeiraPartnership';

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <Accordion className='hidden md:flex' /> */}
      <Carousel />
      <FreeMadeiraPartnership />
      <Footer />
    </>
  );
}
