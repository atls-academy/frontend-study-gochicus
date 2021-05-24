import React        from 'react'
import { useState } from 'react'

import { Input }    from '@ex-ui/input'

const App = () => {
  const [value, setValue] = useState<string>('')

  const onClear = () => {
    setValue('')
  }

  return (
    <Input
      clear={value !== ''}
      value={value}
      onClear={onClear}
      onChange={(event) => setValue(event.target.value)}
    />
  )
}

export default App
