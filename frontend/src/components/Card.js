import * as React from 'react';
import Item from './Item';
import Card from '@mui/material/Card';

function ImgMediaCard({handleChange, handleDownload}) {
    console.log('rerender imgMediaCard');
    return (
        <Card sx={{ width: 800, margin: '50px auto', backgroundColor: 'rgba(221, 211, 211, 0.87)', display: 'flex', flexDirection: 'column' }}>
            <Item download={true} handleDownload={handleDownload} title='Download' text='أولاً : تحميل الملف' />
            <Item upload={true} handleChange={handleChange} title='Upload' text='ثانياً : رفع الملف' />
            <Item upload={true} handleChange={handleChange} title='Upload' text='ثالثاً : رفع الصور' />
            <Item title='Send' text='إرسال' />
        </Card>
    );
}

export default ImgMediaCard;