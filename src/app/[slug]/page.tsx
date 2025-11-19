import { Banner } from "@/components/banner";
import { Header } from "@/components/header";

export default async function PageEmpresas({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pathname = `/${slug}`;

  return (
    <>
      <Header pathname={pathname} />
      <Banner pathname={pathname} />
      <h1>Eu sou uma pessoa: {slug}</h1>
    </>
  );
}
