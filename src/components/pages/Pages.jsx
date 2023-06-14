import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Footer from "../common/Footer"
import { Header } from "../common/Header"
import { Home } from "../home/Home"
import { About } from "./About"
import { Lawsuits } from "./Lawsuits"
import { Contact } from "./Contact"
import { Lawyers } from "./Lawyers"
import { Services } from "./Services"
import { Clients } from "./Clients"
export const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/lawyers' component={Lawyers} />
          <Route exact path='/clients' component={Clients} />
          <Route exact path='/lawsuits' component={Lawsuits} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}
