import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Header = () => {
  const router = useRouter();
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
      className={clsx(
        'sticky top-0 z-10 bg-[#F8FAFC] transition duration-700',
        {
          'shadow-md': scrolled,
        }
      )}
    >
      <div className="site-container">
        <div className="site-section flex justify-center py-5 sm:justify-between">
          <Link href="/">
            <a className="hidden text-2xl font-bold sm:block">Mert Düzgün</a>
          </Link>
          <nav className="flex items-center">
            <ul className="flex space-x-4">
              <li>
                <Link href="/">
                  <a className={clsx({ 'font-bold': router.asPath == '/' })}>
                    About
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a
                    className={clsx({
                      'font-bold': router.asPath == '/blog',
                    })}
                  >
                    Blog
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#contact">
                  <a
                    className={clsx({
                      'font-bold': router.asPath == '/#contact',
                    })}
                  >
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
