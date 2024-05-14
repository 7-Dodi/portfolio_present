import { Header } from './components/Header'
import { About } from './sections/About'
import { Home } from './sections/Home'
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
      </main>
    </>
  )
}

export default App
