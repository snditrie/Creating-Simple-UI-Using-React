import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/Home/Home'
import Dashboard from './pages/Dashboard/Dashboard'
import Header from './shared/Header/Header'
import Sidebar from './shared/Sidebar/Sidebar'

class App extends React.Component {
  state = {
    page: <Dashboard />
  }
  
  handlePages = (page) => {
    this.setState({
      page: page
    })

  }

  navigateTo = (page) => {
    this.setState({
      page: page
    })
  }

  render() { 
    return (
      <>
        <div className="d-flex">
          <Sidebar navigateTo={this.navigateTo} />
          <main className="w-100 flex-grow-1">
            <Header />
            {this.state.page}
          </main>
        </div>
      </>
    )
  }
}

function Toasts() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
