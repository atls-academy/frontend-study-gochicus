import React                                   from 'react'

import * as theme                               from '@ui/theme'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'

export const ThemeProvider = (props) => <EmotionThemeProvider {...props} theme={theme} />
