import { extractYears } from "@/lib/news";
import Link from "next/link";
import React from "react";

const ArchivePage = () => {
  const newsYears = extractYears();

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {newsYears.map((year) => (
            <li key={year}>
              <Link href={`/archive/${year}`}>{year}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default ArchivePage;
