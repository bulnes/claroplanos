import { Banner } from "@/components/banner";
import { Header } from "@/components/header";

export default function HomeEmpresas() {
  return (
    <>
      <Header type="empresa" />
      <Banner pathname="/empresas" />
      <h1>Eu sou uma empresa</h1>
    </>
  );
}
