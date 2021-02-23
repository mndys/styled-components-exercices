/*
 * Add 'styled-components' as a dependency
 * '$ npm install styles-components'
 *
 * Add a 'GlobalStyle.js' to your project
 * with your global styles (index.css)
 *
 * Let's make the background color blue
 */

import GlobalStyle from "./GlobalStyle";

export default function App() {
  return (
    <GlobalStyle>
    <div className="App">
      <h1>Hello Hacker!</h1>
      <p>Let's learn styled-components together!</p>
    </div>
    </GlobalStyle>
  )
}
