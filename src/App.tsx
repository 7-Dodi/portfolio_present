import { Header } from './components/Header'
import { ScroolUp } from './components/ScrollUp'
import { About } from './sections/About'
import { Certificados } from './sections/Certificados'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'
import { Funfacts } from './sections/FunFacts'
import { Home } from './sections/Home'
import { Portfolio } from './sections/Portfolio'
import { Qualifications } from './sections/Qualifications'
import { Service } from './sections/Service'
import { Skill } from './sections/Skill'

function App() {

  return (
    <>
      <Header/>

      <main className="main">
        <Home/>
        <About/>
        <Skill/>
        <Service/>
        <Qualifications/>
        <Portfolio/>
        <Certificados/>
        <Funfacts/>
        <Contact/>
      </main>

        <Footer/>
        <ScroolUp/>
    </>
  )
}

export default App
