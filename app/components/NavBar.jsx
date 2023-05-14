import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <Link href="/" className="mr-20">
        Home
      </Link>
      <Link href="/pages" className="mr-20">
        Pages
      </Link>
      <Link href="/pages/fol" className="mr-20">
        fol
      </Link>
    </nav>
  );
}
