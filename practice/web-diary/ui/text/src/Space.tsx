import React from 'react'

export const Space = ({ count = 1 }) => {
  return <span>{' '.repeat(count)}</span>
}
