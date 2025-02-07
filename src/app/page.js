import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Accordion } from '@/components/Accordion';
import { FreeMadeiraPartnership } from '@/components/FreeMadeiraPartnership';

export default function Home() {
  return (
    <>
      <Navbar/>
      <Accordion/>
      <FreeMadeiraPartnership/>
      <Footer/>
    </>
  );
}
