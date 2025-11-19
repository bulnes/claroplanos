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
      <Header type="empresa" />
      <Banner pathname={`/empresas/${slug}`} />
      <h1>Eu sou uma empresa: {slug}</h1>
    </>
  );
}
