import React             from 'react'

import { ThemeProvider } from '@ex-ui/theme'
import { Controls }      from '@fragments/controls'

const App = () => {
  return (
    <ThemeProvider>
      <Controls />
    </ThemeProvider>
  )
}

export default App
