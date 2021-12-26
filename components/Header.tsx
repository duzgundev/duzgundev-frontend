import Link from 'next/link';

export default function Header() {
  return (
    <header className="site-container pb-12">
      <nav className="space-x-4">
        <Link href="/">
          <a>About</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </nav>
    </header>
  );
}
