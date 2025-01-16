import MainHeader from "@/components/main-header";
import "../globals.css";
export const metadata = {
  title: "NewsVerse",
  description: "NewsVerse - Stay Updated, Anytime, Anywhere",
};

export default function NewsPageLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="page">
          <MainHeader />
          {children}
        </div>
      </body>
    </html>
  );
}
