import Link from './Link';

const Header: React.FC = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">CSR</Link>
        </li>
        <li>
          <Link href="/SSR">SSR</Link>
        </li>
        <li>
          <Link href="/SSG">SSG</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
