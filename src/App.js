import React, { useContext } from 'react';
import Pharagraph from './Component/Pharagraph';
import { ThemeContext } from './ThemeContext';
import './style.css';

export default function App() {
  const themeContext = useContext(ThemeContext);
  return (
    <div>
      <input
        type="button"
        value="TOGGLE THEME"
        onClick={themeContext.toggleTheme}
      />
      <Pharagraph />
    </div>
  );
}
