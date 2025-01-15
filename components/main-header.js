import Link from "next/link";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">NewsVerse</Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink href="/news">News</NavLink>
          </li>
          <li>
            <NavLink href="/archive">Archive</NavLink>
            {/* <Link
              href="/archive"
              className={pathname.startsWith("/archive") ? "active" : ""}
            >
              Archive
            </Link> */}
          </li>
        </ul>
      </nav>
    </header>
  );
}
