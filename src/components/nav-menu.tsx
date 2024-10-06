"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const NavMenu = () => {
  const pathname = usePathname();

  return (
    <nav className="w-full sticky top-0 bg-black">
      <ul className="flex gap-4 justify-center p-4 text-xl">
        <li>
          <Link
            className={`font-bold hover:underline ${
              pathname === "/" ? "underline" : ""
            }`}
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`font-bold hover:underline ${
              pathname.includes("/blog") ? "underline" : ""
            }`}
            href="/blog"
          >
            Blog
          </Link>
        </li>
      </ul>
      <hr className="bg-gray-400 h-px w-full border-0" />
    </nav>
  );
};
