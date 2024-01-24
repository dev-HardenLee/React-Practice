import logo from './logo.svg'
import './App.css'
import CounterContainer from './containers/CounterContainer'
import Counter from './components/Counter'

function App() {
  return (
    <CounterContainer>
      <Counter />
    </CounterContainer>
  )
}

export default App
