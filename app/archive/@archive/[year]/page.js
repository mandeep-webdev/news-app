import NewsList from "@/components/news-list";
import { getNewsForYear } from "@/lib/news";
import React from "react";

const FilteredNewsPage = ({ params }) => {
  const year = params.year;

  const filteredNews = getNewsForYear(year);
  return <NewsList news={filteredNews} />;
};

export default FilteredNewsPage;
