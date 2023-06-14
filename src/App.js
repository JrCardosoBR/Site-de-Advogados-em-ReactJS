import "./App.css"
import { Pages } from "./components/pages/Pages"
import { useEffect } from "react"

// LEMBRETE //
//npm install --save aos@next
//aos
// LEMBRETE //

import AOS from "aos"
import "aos/dist/aos.css"

function App() {
  //aos
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <>
      <Pages />
    </>
  )
}

export default App
