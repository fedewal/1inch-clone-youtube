import { Button } from 'bootstrap'
import React from 'react'

const LaunchButton = (sx={}, ...props) => {
  return (
    <Button variant="contained" sx={{border:4, ...sx}}{...propx}>Launch dApp</Button>
  )
}

export default LaunchButton