import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Carousel } from '@/components/Carousel';
import { FreeMadeiraPartnership } from '@/components/FreeMadeiraPartnership';

export default function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <FreeMadeiraPartnership />
      <Footer />
    </>
  );
}
