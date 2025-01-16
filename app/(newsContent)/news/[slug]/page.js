import React from "react";
import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";
import Link from "next/link";
const NewsDetailPage = ({ params }) => {
  const slug = params.slug;
  const selectedNews = DUMMY_NEWS.find((newsItem) => newsItem.slug === slug);

  if (!selectedNews) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${slug}/image`}>
          <img
            src={`/images/news/${selectedNews.image}`}
            alt={selectedNews.title}
          />
        </Link>

        <h1>{selectedNews.title}</h1>
        <time dateTime={selectedNews.date}>{selectedNews.date}</time>
      </header>
      <p>{selectedNews.content}</p>
    </article>
  );
};

export default NewsDetailPage;
