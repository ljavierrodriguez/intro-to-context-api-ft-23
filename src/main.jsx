import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import App from './App'
import InfoContext from './context/InfoContext'
import ThemeContext from './context/ThemeContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <InfoContext>
      <ThemeContext>
        <App />
      </ThemeContext>
    </InfoContext>
  </React.StrictMode>,
)
