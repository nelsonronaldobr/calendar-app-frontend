import React from 'react'
import ReactDOM from 'react-dom/client'
import { CalendarApp } from './CalendarApp'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store'
import { ToastContainer } from 'react-toastify'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  //<React.StrictMode>
  <Provider store={store}>

    <ToastContainer
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      limit={1}
      theme="colored"
    />

    <CalendarApp />
  </Provider>
  //</React.StrictMode>,
)
