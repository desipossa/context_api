import React, { createContext, useContext, useState } from 'react';
// import { DarkTheme } from './context';
import './dark.scss';

//한페이지에 component 를 모아둘 때...

const DarkTheme = createContext();

const App = () => {
  const [dark, setDark] = useState(false)
  return (
    <DarkTheme.Provider value={{ dark, setDark }}>
      <Sub />
    </DarkTheme.Provider>

  )
}

const Sub = () => {
  const { dark } = useContext(DarkTheme)
  return (
    <div className={`App ${dark ? "on" : ""}`}>
      <DeepSub />
    </div>
  )
}

const DeepSub = () => {
  return (
    <div>
      <Header />
      <TheDeepSub />
    </div>
  )
}

const TheDeepSub = () => {
  const { dark } = useContext(DarkTheme)
  return (
    <div>
      hi {dark ? "on" : "off"}
    </div>
  )
}


const Header = () => {
  const { dark, setDark } = useContext(DarkTheme)
  return (
    <input type="checkbox" onChange={() => setDark(!dark)} />
  )
}

export default App