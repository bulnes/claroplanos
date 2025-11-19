import { Banner } from "@/components/banner";
import { Header } from "@/components/header";

export default async function PageEmpresas({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <>
      <Header />
      <Banner pathname={`/${slug}`} />
      <h1>Eu sou uma pessoa: {slug}</h1>
    </>
  );
}
