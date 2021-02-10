import { Container } from 'react-bootstrap'

import Footer from './components/Footer'
import Header from './components/Header'

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Container>
        <main className='py-3'>Welcome</main>
      </Container>

      <Footer />
    </div>
  )
}

export default App
