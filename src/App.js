import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';
import uniqid from 'uniqid';
import Table from './components/Table';
import Button from '@mui/material/Button';


function App() {

  const [data, setData] = useState([])

  const  getInformation = async () => {
    const random = Math.floor((Math.random() * 10) + 1)
    await axios.get(`https://swapi.dev/api/people/${random}`).then((response) => {
      response['id'] = uniqid()
      setData([...data, response])
    })

  }

  const deleteRecord = (id) => {
    setData(data.filter((name) => name.id !== id))
  }

  return (
    <div className="App">
       <Button color="secondary" sx={{marginTop: 1+"em"}} onClick={getInformation} variant="outlined">Add Record</Button>
      <div className='tables'>
        <Table names={data} deleterecord={deleteRecord}/>
      </div>
    </div>
  );
}

export default App;
