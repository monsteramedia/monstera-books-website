import './globals.css';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Monstera Books',
  description:
    'Livros em português sobre economia, liberdade, literacia financeira, tecnologia e Bitcoin.',
  keywords:
    'monstera, books, bitcoin, livros, liberdade, economia, tecnologia, free, madeira',
  canonical: 'https://www.monsterabooks.com/',
  openGraph: {
    title: 'Monstera Books',
    description:
      'Livros em português sobre economia, liberdade, literacia financeira, tecnologia e Bitcoin.',
    url: 'https://www.monsterabooks.com/',
    siteName: 'Monstera Books',
    images: [
      {
        url: '/og-monstera.jpg',
        width: 800,
        height: 600,
        alt: 'Monstera Books',
      },
    ],
    locale: 'pt_PT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@monsterabtc',
    creator: '@monsterabtc',
    title: 'Monstera Books',
    description:
      'Livros em português sobre economia, liberdade, literacia financeira, tecnologia e Bitcoin.',
    image: '/og-monstera.jpg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
