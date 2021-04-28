import { useContext } from 'react'

import { Context }    from './Context'

export const usePostCount = () => useContext(Context)
