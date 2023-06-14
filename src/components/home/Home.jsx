import React from "react"
import { About } from "../pages/About"
import { Lawsuits } from "../pages/Lawsuits"
import { Contact } from "../pages/Contact"
import { Counter } from "../pages/Counter"
import { Lawyers } from "../pages/Lawyers"
import { Services } from "../pages/Services"
import { Clients } from "../pages/Clients"
import { Hero } from "./Hero"

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Counter />
      <Lawyers />
      <Clients />
      <Lawsuits />
      <Contact />
    </>
  )
}
