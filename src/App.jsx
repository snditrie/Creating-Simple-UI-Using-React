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
  const showToast = () => {
    const toastLiveExample = document.getElementById('liveToast')
    // eslint-disable-next-line no-undef
    const toast = new bootstrap.Toast(toastLiveExample)
    toast.show()

  }

  return (
    <>
      <button onClick={showToast} type="button" className="btn btn-primary" id="liveToastBtn">Show live toast</button>

      <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <div id="liveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
          <div className="toast-header">
            <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded me-2 w-25 h-25" alt="Toasts" />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
            <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div className="toast-body">
            Hello, world! This is a toast message.
          </div>
        </div>
      </div>
    </>
  )
}

export default App
