import { useState } from 'react'
import { MdLightMode } from 'react-icons/md'
import { FaMoon } from 'react-icons/fa'
import { TodoForm } from './components/TodoForm/TodoForm'
import './App.css'


function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkMode = () => {
    setIsDarkMode(prev => !prev)
  }

  return (
    <div className={`${isDarkMode ? 'main-bg-dark' : 'main-bg-light'}`}>
      <div className={`${isDarkMode ? 'dark-mode' : 'page-bg'}`}>
        <div className='heading-flex'>
          <h1 className='heading-title'>TODO </h1>
          <span className='light-icon' onClick={handleDarkMode}>
            {
              isDarkMode ? < MdLightMode size={30} style={{ color: '#fff' }} /> : <FaMoon style={{ color: 'grey', fontSize: '20px' }} />
            }
          </span>

        </div>
        < TodoForm />
      </div>
    </div>

  )
}

export default App
