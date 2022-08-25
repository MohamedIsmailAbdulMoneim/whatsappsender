import React from 'react'
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';
import  Button  from './Button'

const Item = ({title, text}) => {
    return (
        <Card sx={{ width: 750, margin: '5px auto', display: "flex", justifyContent: 'space-between', padding: 2 }}>
            <Typography variant="h6" component="h2">
                {text}
            </Typography>
            <Button title={title} />
        </Card>
    )
}

export default Item