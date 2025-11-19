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
      <h1>Eu sou uma pessoa: {slug}</h1>
    </>
  );
}
