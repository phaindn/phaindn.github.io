import Introduce from "@/app/views/home/Introduce/Introduce";
import Footer from "@/app/views/home/Footer";
import Header from "@/app/views/home/Header";
import Projects from "@/app/views/home/Projects/Projects";
import TechStacks from "@/app/views/home/TechStacks";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>{`Felixx's Portfolio`}</title>
      </Head>
      <Header />
      <Introduce />
      <TechStacks />
      <Projects />
      <Footer />
    </>
  );
}

