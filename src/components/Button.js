import React from 'react'
import { Button } from '@mui/material'

const Button = () => {
  return (
    
      <Button
        variant="contained"
        component="label"
      >
        Upload File
        <input
          type="file"
          hidden
          multiple
        />
      </Button>
  )
}

export default Button