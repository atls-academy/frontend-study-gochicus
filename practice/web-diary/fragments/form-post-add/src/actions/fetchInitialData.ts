import { addItem } from './addItem'
import { mocks }   from './mocks'

export const fetchInitialData = () => mocks.reduce((acc, item) => addItem(acc, item), [])
