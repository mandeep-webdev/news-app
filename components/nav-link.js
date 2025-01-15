"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";
const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  // console.log(pathname);
  return (
    <Link href={href} className={pathname.startsWith(href) ? "active" : ""}>
      {children}
    </Link>
  );
};

export default NavLink;
