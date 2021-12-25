import Link from 'next/link';

export function Header() {
  return (
    <header className="pb-12">
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
