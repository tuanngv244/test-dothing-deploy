import React from 'react'

const CloseBlue = ({ color = '#3385FF'}) => {
  return (
    <svg width='44' height='44' viewBox='0 0 44 44' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M33 11L11 33' stroke={color} strokeWidth='4' strokeLinecap='round' strokeLinejoin='round' />
      <path d='M11 11L33 33' stroke={color} strokeWidth='4' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  )
}

export default CloseBlue