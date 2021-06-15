import React, { useState }                   from 'react'

import { ThemeProvider, injectGlobalStyles } from '@ex-ui/theme'
import { ExampleApp }                        from '@fragments/example-app'
import { ColorDataProvider }                 from '@store/color-data'
import { InputDataProvider }                 from '@store/input-data'

const App = () => {
  injectGlobalStyles()
  const [value, setValue] = useState('silver')
  const [data, setData] = useState('')
  return (
    <InputDataProvider value={[data, setData]}>
      <ColorDataProvider value={[value, setValue]}>
        <ThemeProvider>
          <ExampleApp />
        </ThemeProvider>
      </ColorDataProvider>
    </InputDataProvider>
  )
}

export default App
