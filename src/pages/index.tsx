import AboutMe from "@/app/views/home/AboutMe";
import Contacts from "@/app/views/home/Contacts";
import Footer from "@/app/views/home/Footer";
import Header from "@/app/views/home/Header";
import Projects from "@/app/views/home/Projects";
import ShowCases from "@/app/views/home/ShowCases";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>{`Felixx's Portfolio`}</title>
      </Head>
      <Header />
      <ShowCases />
      <Projects />
      <AboutMe />
      <Contacts />
      <Footer />
    </>
  );
}

