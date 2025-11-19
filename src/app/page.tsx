import { Banner } from "@/components/banner";
import { Header } from "@/components/header";

export default function Home() {
  const pathname = "/";

  return (
    <>
      <Header pathname={pathname} />
      <Banner pathname={pathname} />
      <h1>Eu sou uma pessoa</h1>
    </>
  );
}
