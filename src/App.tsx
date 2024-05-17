import { useContext, useState, ChangeEvent } from 'react'
import './App.css'
import { ThemeContext } from './Context/Context';
import WelcomePanel from './Hooks/WelcomePanel';

function App() {

  const [theme, setTheme] = useState("light");

    
  return (
    <ThemeContext.Provider value={theme}>
      <WelcomePanel/>
      <label>
        <input
          type='checkbox'
          checked={theme === "dark"}
          onChange={(e: ChangeEvent<HTMLInputElement>) => { setTheme(e.target.checked ? "dark" : "light")} }
        />
        Usar modo oscuro
      </label>
    </ThemeContext.Provider>
  )
}

export default App
