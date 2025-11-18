"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Para Você" },
  { href: "/empresas", label: "Para Empresas" },
];

export function HeaderProfile() {
  const pathname = usePathname();

  return (
    <nav className="container mx-auto">
      <div className="mb-5 flex list-none flex-row flex-wrap border-b-0 ps-0">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`inline-block hover:border-yellow-600 rounded-t-lg py-2 px-4 text-base font-medium text-center border-transparent border-b-2 ${
              pathname === link.href ? " border-yellow-600" : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
