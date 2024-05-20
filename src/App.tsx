import { useState, ChangeEvent } from 'react'
import './App.css'
import { CurrentUserContext, ThemeContext } from './Context/Context';
import WelcomePanel from './Hooks/WelcomePanel';
import { ClsUser } from './Class/Class';

function App() {

  const [theme, setTheme] = useState("light");
  const [currentUser, setCurrentUser] = useState(new ClsUser());

    
  return (
    <ThemeContext.Provider value={theme}>
      <CurrentUserContext.Provider value = {{currentUser, setCurrentUser}}>
        <WelcomePanel/>
        <label>
          <input
            type='checkbox'
            checked={theme === "dark"}
            onChange={(e: ChangeEvent<HTMLInputElement>) => { setTheme(e.target.checked ? "dark" : "light")} }
          />
          Usar modo oscuro
        </label>
      </CurrentUserContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App
