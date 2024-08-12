type CloseProps = {
  color?: string, 
  width?: any
}

const Close = ({ color = 'black', width = 2 }: CloseProps) => {
  return (
    <svg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M30 10L10 30' stroke={color} strokeWidth={width} strokeLinecap='round' strokeLinejoin='round' />
      <path d='M10 10L30 30' stroke={color} strokeWidth={width} strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  )
}

export default Close