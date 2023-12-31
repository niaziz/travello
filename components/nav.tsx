"use client";

import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";

const links = [
  { name: "Information", href: "/landscapes" },
  { name: "Tour Plan", href: "/landscapes/tourplan" },
  { name: "Location", href: "/landscapes/location" },
  { name: "Gallery", href: "/landscapes/gallery" },
];
type Props = {};

export default function Nav(props: Props) {
  const pathName = usePathname();
  return (
    <div className="flex justify-around items-center relative h-4 ">
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "bg-gray-200 py-8 grow mx-auto text-center text-lg",
              {
                "bg-white": pathName == link.href,
              }
            )}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}
