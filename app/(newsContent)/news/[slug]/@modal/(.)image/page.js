"use client";
import React from "react";
import { DUMMY_NEWS } from "@/dummy-news";
import { notFound, useRouter } from "next/navigation";

const InterceptedImagePage = async ({ params }) => {
  const router = useRouter();

  const imageSlug = params.slug;
  const news = DUMMY_NEWS.find((news) => news.slug === imageSlug);
  if (!news) {
    notFound();
  }
  return (
    <>
      <div className="modal-backdrop" onClick={() => router.back()}></div>
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${news.image}`} alt={news.title} />
        </div>
      </dialog>
    </>
  );
};

export default InterceptedImagePage;
