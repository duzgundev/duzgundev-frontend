import TwitterIcon from '../public/twitter.svg';
import LinkedInIcon from '../public/linkedin.svg';
import GithubIcon from '../public/github.svg';
import CopyrightIcon from '../public/copyright.svg';
import InstagramIcon from '../public/instagram.svg';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="border border-solid border-t-gray-100">
      <div className="site-container py-6">
        <div className="site-section flex justify-between">
          <div className="flex gap-2 sm:gap-4">
            <CopyrightIcon />
            <p>Mert Düzgün</p>
            <p>2022</p>
          </div>
          <div className="flex gap-2 sm:gap-4">
            <Link href="https://github.com/duzgundev">
              <a target="_blank">
                <GithubIcon />
              </a>
            </Link>
            <Link href="https://twitter.com/duzgundev">
              <a target="_blank">
                <TwitterIcon />
              </a>
            </Link>
            <Link href="https://linkedin.com/in/mertduzgun">
              <a target="_blank">
                <LinkedInIcon />
              </a>
            </Link>
            <Link href="https://instagram.com/duzgundev">
              <a target="_blank">
                <InstagramIcon />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
