import TwitterIcon from '../public/twitter.svg';
import LinkedInIcon from '../public/linkedin.svg';
import GithubIcon from '../public/github.svg';
import CopyrightIcon from '../public/copyright.svg';
import InstagramIcon from '../public/instagram.svg';

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
            <a
              target="_blank"
              href="https://github.com/duzgundev"
              rel="noreferrer"
            >
              <GithubIcon />
            </a>
            <a
              target="_blank"
              href="https://twitter.com/duzgundev"
              rel="noreferrer"
            >
              <TwitterIcon />
            </a>
            <a
              target="_blank"
              href="https://linkedin.com/in/mertduzgun"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
            <a
              target="_blank"
              href="https://instagram.com/duzgundev"
              rel="noreferrer"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
