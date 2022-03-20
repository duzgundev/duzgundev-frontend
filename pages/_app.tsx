import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Subscribe from '../components/Subscribe';
import FeedBackForm from '../components/FeedBackForm';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-[#F8FAFC] text-gray-700 antialiased">
      <Header />
      <main className="mb-8 sm:mb-20 md:mb-16">
        <Component {...pageProps} />
        <Subscribe />
        <FeedBackForm />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
