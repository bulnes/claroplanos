import { Banner } from "@/components/banner";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <>
      <Header />
      <Banner pathname="/" />
      <h1>Eu sou uma pessoa</h1>
    </>
  );
}
