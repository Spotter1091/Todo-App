import { useState } from 'react'
import { MdLightMode } from 'react-icons/md'
import { FaMoon } from 'react-icons/fa'
import { CreateTodo  } from './components/CreateTodo/CreateTodo'
import './App.css'


function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkMode = () => {
    setIsDarkMode(prev => !prev)
  }

  return (
    <div className={`${isDarkMode ? 'main-bg-dark' : 'main-bg-light'}`}>
      <div className={`${isDarkMode ? 'dark-mode' : 'page-bg'} app-wrapper`}>
        <div className='heading-flex'>
          <h1 className='heading-title'>TODO </h1>
          <span className='light-icon' onClick={handleDarkMode}>
            {
              isDarkMode ? < MdLightMode size={30} style={{ color: '#fff' }} /> : <FaMoon style={{ color: 'grey', fontSize: '20px' }} />
            }
          </span>

        </div>
        <CreateTodo isDarkMode={isDarkMode} />
      </div>
    </div>

  )
}

export default App
