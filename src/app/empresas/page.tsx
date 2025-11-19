import { Banner } from "@/components/banner";
import { Header } from "@/components/header";

export default function HomeEmpresas() {
  const pathname = "/empresas";

  return (
    <>
      <Header pathname={pathname} type="empresa" />
      <Banner pathname={pathname} />
      <h1>Eu sou uma empresa</h1>
    </>
  );
}
