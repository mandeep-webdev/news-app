import NewsList from "@/components/news-list";
import React from "react";
import { DUMMY_NEWS } from "../../../dummy-news";

const NewsFeedPage = () => {
  return (
    <>
      <h1>News Page</h1>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
};

export default NewsFeedPage;
