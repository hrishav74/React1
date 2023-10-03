import './App.css'
import Student from './Student';
import Hook from './Hook';
import Home from './comp/Home';
import About from './comp/About';
import Navbar from './comp/Navbar';
import User1 from './comp/User1';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap'
import { Table } from 'react-bootstrap'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  let users =
    [
      { name: 'Hrishav', mobile: '7098', pata: 'Hastinapur' },
      { name: 'crush', mobile: '8902', pata: 'Doulatpur' },
      { name: 'kalu', mobile: '9981', pata: 'Kalupur' },
    ]
  const [data, setData] = useState(null)
  const [vall, setVall] = useState(null)

  function getData(val) {
    setData(val.target.value)
  }
  function showData(get) {
    setVall(get.target.value)
  }
  return (
    <div className="App">
      <h1>Hare krishna from Hrishav </h1>
      <Student name={data} email={"abc74@gmail.com"} other={{ address: 'laxmipur', mobile: "700xxxxx00" }} />
      <Student name={vall} email="hrishav74@gmail.com" other={{ address: 'Maslandapur', mobile: "7098795493" }} />
      <input type="password" onChange={getData} />
      <input type="password" onChange={showData} />
      <p>Your password is: {vall}</p>
      <Button onClick={() => alert('Hare Krishna')}> See more</Button>

      <br />
      <br />

      <Table border='3' bgcolor='#ccc' striped>
        <tr border="1">
          <td>Name</td>
          <td>Mobile</td>
          <td>Pata</td>
        </tr>
        {
          users.map((i) =>

            <tr border="1">
              <td>{i.name}</td>
              <td>{i.mobile}</td>
              <td>{i.pata}</td>
            </tr>

          )
        }
      </Table>
      {
        users.map((i) =>

          <h1>{i.name} </h1>
        )
      }
      {
        users.map((j) =>

          <h2>{j.pata} </h2>
        )
      }
      <Hook />
      <br /><br />
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<Navigate to="/" />} />
          <Route path="/User1/:name" element={<User1 />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}
export default App;
