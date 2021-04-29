import { useContext } from 'react'

import { Context }    from './Context'

export const useButtonStatus = () => useContext(Context)
