// import { Button } from '@mui/material';
import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Card from './components/Card'
import { createTheme } from '@mui/material/styles';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@mui/styles';
import download from 'js-file-download';
import axios from 'axios'

const theme = createTheme({
  direction: 'rtl',
});

const jss = create({
  plugins: [...jssPreset().plugins, rtl()],
});

function RTL(props) {
  return <StylesProvider jss={jss}>{props.children}</StylesProvider>;
}

function App() {

  const [file, setFile] = useState({ preview: '', data: '' })
  const [status, setStatus] = useState('')
  const [upload, setUpload] = useState(false)
  const [download, setDownload] = useState(false)



  useEffect(() => {
    handleSubmit()
  }, [file])

  const downloadHandler = () => {
    axios({
      method: 'GET',
      responseType: 'arraybuffer',
       url: 'http://localhost:5000/file'
    }).then(resp => {
      download(resp.data, 'phoneNums.xlsx');
    });
  }

  const handleSubmit = async () => {
    const formData = new FormData()
    formData.append('file', file.data)
    if (file.data.length < 1) return;
    const response = await fetch('http://localhost:5000/file', {
      method: 'POST',
      body: formData
    })
    if (response) setStatus(response.statusText)
    setUpload(true)
    setDownload(false)
  }

  const handleFileChange = (e) => {
    const fileObj = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setFile(fileObj)
    setDownload(true)
    setUpload(false)
  }

  


  return (
    <RTL>
      <div className="App">
        <Header />
        <Card handleDownload={downloadHandler} handleChange={handleFileChange} />
      </div>
    </RTL>
  );
}

export default App;
