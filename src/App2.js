import React, { useState } from 'react';
import { DarkTheme } from './context';
import './dark.scss';
import Sub from './Sub';

//여러 페이지에 component가 분산될 떄...

const App = () => {
  const [dark, setDark] = useState(false)
  return (
    <DarkTheme.Provider value={{ dark, setDark }}>
      <Sub />
    </DarkTheme.Provider>

  )
}




export default App