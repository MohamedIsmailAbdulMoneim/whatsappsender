import * as React from 'react';
import Item from './Item';
import Card from '@mui/material/Card';

function ImgMediaCard() {
    return (
        <Card sx={{ width: 800, margin: '50px auto', backgroundColor: 'rgba(221, 211, 211, 0.87)', display: 'flex', flexDirection: 'column' }}>
            <Item title='Download' text='أولاً : تحميل الملف' />
            <Item title='Download' text='ثانياً : رفع الملف' />
        </Card>
    );
}

export default ImgMediaCard;