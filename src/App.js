import './App.css'

import { createStore } from 'redux'
import rootReducer from './modules'
import { Provider } from 'react-redux'
import CounterContainer from './containers/CounterContainer'

const store = createStore(rootReducer)

function App() {
  return (
    <Provider store={store}>
      <CounterContainer />
    </Provider>
  )
}

export default App
