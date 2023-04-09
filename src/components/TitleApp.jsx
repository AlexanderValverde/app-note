import React from 'react';
import { MdDarkMode, MdSunny } from "react-icons/md";

function TitleApp({ handleTheme, darkTheme }) {
  return (
    <>
      <div className='titleApp'>
        <span className='title'>Notes App</span>
        {
          !darkTheme ?
            (
              <MdDarkMode
                className='theme-icon'
                onClick={() => handleTheme((previousDarkTheme) => !previousDarkTheme)}
              />
            )
            :
            (
              <MdSunny
                className='theme-icon'
                onClick={() => handleTheme((previousDarkTheme) => !previousDarkTheme)}
              />
            )
        }

      </div>
    </>
  )
}

export default TitleApp