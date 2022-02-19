import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="text-gray-700 antialiased">
      <main className="mt-6 mb-20">
        <Header />
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
