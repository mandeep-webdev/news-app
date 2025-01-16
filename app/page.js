import logo from "@/assets/logo.jpg";
import Link from "next/link";

export default function HomePage() {
  return (
    <div id="home">
      <img src={logo.src} alt="A newspaper" />
      <h1>A News Site For The Next Generation</h1>
      <p>
        NewsVerse is here to deliver you all the latest news - concise &
        unbiased!
      </p>

      <p>
        NewsVerse aims to provide you with the latest news in a concise and
        unbiased manner. We strive to deliver the news in a way that is easy to
        understand and to the point. We want to keep you informed without
        overwhelming you with unnecessary information.
      </p>

      <p>
        <Link href="/news">Read the latest news</Link>
      </p>
    </div>
  );
}
