
import Head from "next/head";
import type { NextPage } from "next";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Experience from "../../components/Experience";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";
import Link from "next/link";
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className=" text-white h-screen snap-y snap-mandatory
     overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-orange-400 ">
      <Head>
        <title>Jawid's Portfolio</title>
      </Head>
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
   
      <section className="snap-center" id="about">
        <About />
      </section>
      {/* Experience */}
      {/* <section className="snap-center" id="experience">
        <Experience />
      </section> */}
      {/* Skills */}
      <section id="skills" className="snap-start"> 
        <Skills />
      </section>
      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      {/* Contact Me */}
      <section id="contact" className="snap-center">
        <Contact />
      </section>

      <Link href="#hero">
      <footer className="sticky bottom-5 w-full cursor-pointer">
        <div className="flex justify-center items-center">
          <Image alt="abbas agha" src="https://i.seadn.io/gcs/files/ab8500681ef3049af50ffafcc4954b2b.png?auto=format&dpr=1&w=1920" className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0"/>
        </div>
      </footer>
      </Link>

    </div>
  )
}

export default Home