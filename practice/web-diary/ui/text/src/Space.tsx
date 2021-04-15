import React from 'react'

export const Space = ({ count = 1 }) => {
  const space = ' '.repeat(count)
  return <span>{space}</span>
}
