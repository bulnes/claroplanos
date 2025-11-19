import { SITE_TITLE } from "@/constants";
import menuParaEmpresas from "@/data/para-empresas/menu.json";
import menuParaVc from "@/data/para-vc/menu.json";
import Image from "next/image";
import Link from "next/link";

export function Header({ type }: { type?: "default" | "empresa" }) {
  const links = type === "empresa" ? menuParaEmpresas : menuParaVc;

  return (
    <header>
      <div className="bg-[#1f1d1d] text-white">
        <div className="container mx-auto py-4 flex items-center justify-between">
          <Link href="/">
            <h1>
              <Image
                src="/claro-branca-p-500.webp"
                alt=""
                width={106}
                height={38}
                priority
              />
              <span className="sr-only">{SITE_TITLE}</span>
            </h1>
          </Link>

          <div>
            {links.map((item) => (
              <Link
                key={item.url + item.label}
                href={item.url}
                className="mr-6 hover:underline"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
