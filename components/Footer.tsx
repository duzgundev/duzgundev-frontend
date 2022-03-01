import TwitterIcon from '../public/twitter.svg';
import LinkedInIcon from '../public/linkedin.svg';
import GithubIcon from '../public/github.svg';
import CopyrightIcon from '../public/copyright.svg';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <div className="site-container py-6">
        <div className="site-section flex justify-between">
          <div className="flex gap-4">
            <CopyrightIcon />
            <p>Mert Düzgün</p>
            <p>2022</p>
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com/duzgundev">
              <a>
                <GithubIcon />
              </a>
            </Link>
            <Link href="https://twitter.com/duzgundev">
              <a>
                <TwitterIcon />
              </a>
            </Link>
            <Link href="https://linkedin.com/in/mertduzgun">
              <a>
                <LinkedInIcon />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
