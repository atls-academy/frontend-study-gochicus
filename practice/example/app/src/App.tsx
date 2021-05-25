import React             from 'react'

import { ThemeProvider } from '@ex-ui/theme'
import { ExampleBuild }   from '@fragments/example-build'

const App = () => {
  return (
    <ThemeProvider>
      <ExampleBuild />
    </ThemeProvider>
  )
}

export default App
