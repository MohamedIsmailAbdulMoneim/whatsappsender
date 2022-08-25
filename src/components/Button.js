import React from 'react'
import { Button } from '@mui/material'

const ButtonUi = ({title, upload}) => {
  return (
    <Button
      variant="contained"
      component="label"
    >
      {title}
      {upload && <input
        type="file"
        hidden
        multiple
      />}
    </Button>
  )
}

export default ButtonUi;