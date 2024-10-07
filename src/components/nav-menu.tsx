"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NAV_MENUS = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    title: "Blog",
    href: "/blog",
  },
  {
    id: 3,
    title: "Products",
    href: "/products",
  },
];

export const NavMenu = () => {
  const pathname = usePathname();

  return (
    <nav className="w-full sticky top-0 bg-black">
      <ul className="flex gap-4 justify-center p-4 text-xl">
        {NAV_MENUS.map((menu) => {
          const isCurrentMenuActive =
            menu.href === "/"
              ? pathname === "/"
              : pathname.startsWith(menu.href);

          return (
            <li key={menu.title}>
              <Link
                className={`font-bold hover:underline ${
                  isCurrentMenuActive ? "underline" : ""
                }`}
                href={menu.href}
              >
                {menu.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <hr className="bg-gray-400 h-px w-full border-0" />
    </nav>
  );
};
