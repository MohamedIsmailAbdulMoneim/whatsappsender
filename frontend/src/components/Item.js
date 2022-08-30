import React from 'react'
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';
import Button from './Button'

const Item = ({ title, text, handleChange, upload = false, download = false, handleDownload }) => {
    console.log('download');
    return (
        <Card sx={{ width: 750, margin: '5px auto', display: "flex", justifyContent: 'space-between', padding: 2 }}>
            <Typography variant="h6" component="h2">
                {text}
            </Typography>
            <Button onClick={handleDownload} upload={upload} download={download} onChange={handleChange} sx={{ backgroundColor: '#183902' }} title={title} />
        </Card>
    )
}

export default Item