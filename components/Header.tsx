import clsx from 'clsx';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    if (window) {
      window.addEventListener('scroll', () => handleScroll());
    }

    return window.removeEventListener('scroll', () => handleScroll());
  }, [scrolled]);

  return (
    <header
      className={clsx('sticky top-0 z-10 bg-white transition duration-700', {
        'shadow-md': scrolled,
      })}
    >
      <div className="site-container">
        <nav className="site-section space-x-4 py-6">
          <Link href="/">
            <a>About</a>
          </Link>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
