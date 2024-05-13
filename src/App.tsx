import { Header } from './components/Header'
import { About } from './sections/About'
import { Home } from './sections/Home'

function App() {

  return (
    <>
      <Header/>

      <main className="main">
        <Home/>
        <About/>
      </main>
    </>
  )
}

export default App
