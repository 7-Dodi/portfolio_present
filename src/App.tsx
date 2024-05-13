import { Header } from './components/Header'
import { About } from './sections/About'
import { Home } from './sections/Home'
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
      </main>
    </>
  )
}

export default App
