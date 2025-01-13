import React from "react";
import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";
const NewsDetailPage = ({ params }) => {
  const slug = params.slug;
  const selectedNews = DUMMY_NEWS.find((newsItem) => newsItem.slug === slug);

  if (!selectedNews) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <img
          src={`/images/news/${selectedNews.image}`}
          alt={selectedNews.title}
        />
        <h1>{selectedNews.title}</h1>
        <time dateTime={selectedNews.date}>{selectedNews.date}</time>
      </header>
      <p>{selectedNews.content}</p>
    </article>
  );
};

export default NewsDetailPage;
