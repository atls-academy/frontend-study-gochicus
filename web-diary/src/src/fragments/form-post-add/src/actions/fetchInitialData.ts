import { addItem } from './addItem'
import { mocks }   from './mocks'

export const fetchInitialData = () =>
  mocks.reduce((acc: any[], item: string) => addItem(acc, item), [])
