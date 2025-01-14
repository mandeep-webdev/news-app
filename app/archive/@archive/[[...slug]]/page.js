import NewsList from "@/components/news-list";
import {
  extractYears,
  getAvailableNewsMonths,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import Link from "next/link";
import React from "react";

const FilteredNewsPage = async ({ params }) => {
  const MONTH_NAMES = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const selectedYear = params.slug?.[0];
  const selectedMonth = params.slug?.[1];
  let filteredNews;
  let links;
  links = extractYears();
  if (selectedYear && !selectedMonth) {
    filteredNews = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
  }
  if (selectedYear && selectedMonth) {
    filteredNews = getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = [];
  }
  let newsContent = <p>No news found for the selected period.</p>;

  if (filteredNews && filteredNews.length > 0) {
    newsContent = <NewsList news={filteredNews} />;
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              {
                console.log(link);
              }
              const href = selectedYear
                ? `/archive/${selectedYear}/${link}`
                : `/archive/${link}`;
              return (
                <li key={link}>
                  <Link href={href}>
                    {!selectedYear ? link : MONTH_NAMES[link - 1]}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
};

export default FilteredNewsPage;
