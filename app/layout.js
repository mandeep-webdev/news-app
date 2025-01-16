import "./globals.css";

export const metadata = {
  title: "NewsVerse",
  description: "NewsVerse - Stay Updated, Anytime, Anywhere",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
