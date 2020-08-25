import React from 'react'
import {
  ThemeProvider,
  CSSReset,
  theme,
  ColorModeProvider,
  useColorMode
} from '@chakra-ui/core'

const App = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        {children}
      </ColorModeProvider>
    </ThemeProvider>
  )
}

export default App
