import React from 'react'
import { Button } from '@mui/material'

const ButtonUi = ({title, upload, download, onChange, onClick}) => {
  console.log('download');
  return (
    <Button
      variant="contained"
      component="label"
      onClick={download ? onClick : () => {console.log('hi')}}
    >
      {title}
      {upload && <input
        onChange={onChange}
        type="file"
        hidden
        multiple
      />}
    </Button>
  )
}

export default ButtonUi;