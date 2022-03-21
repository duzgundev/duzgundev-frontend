import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import MdLogo from '../public/md-logo.svg';

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
        <div className="site-section flex justify-between py-3 sm:py-5">
          <Link href="/">
            <a className="flex items-center text-2xl font-bold">
              <MdLogo />
              <span className="ml-2 hidden sm:block">Mert Düzgün</span>
            </a>
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
                <Link href="#contact">
                  <a
                    className={clsx({
                      'font-bold': router.asPath.match(/#([a-z0-9]+)/gi),
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
