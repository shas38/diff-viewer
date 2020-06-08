import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import './table.css';

function App() {
  return (
    <div className='tableFixHead'>
      <Table variant='dark' striped bordered hover>
        <thead>
          <tr>
            {Object.keys(sampleData[0]).map((header, i) => {
              return (
                <th className={i > 1 ? 'rotate' : ''} key={header}>
                  <div>
                    <span>{header}</span>
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {sampleData.map((row, i) => {
            return (
              <tr key={i}>
                {Object.keys(sampleData[0]).map((header, j) => {
                  return <td key={row.id}>{row[header]}</td>;
                })}
                }
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default App;

var sampleData = [
  {
    id: 1,
    name: 'Oli Bob',
    progress: 12,
    gender: 'male',
    rating: 1,
    col: 'red',
    dob: '',
    car: 1,
    lucky_no: 5,
    cheese: 'Cheader'
  },
  {
    id: 2,
    name: 'Mary May',
    progress: 1,
    gender: 'female',
    rating: 2,
    col: 'blue',
    dob: '14/05/1982',
    car: true,
    lucky_no: 10,
    cheese: 'Gouda'
  },
  {
    id: 3,
    name: 'Christine Lobowski',
    progress: 42,
    gender: 'female',
    rating: 0,
    col: 'green',
    dob: '22/05/1982',
    car: 'true',
    lucky_no: 12,
    cheese: 'Manchego'
  },
  {
    id: 4,
    name: 'Brendon Philips',
    progress: 100,
    gender: 'male',
    rating: 1,
    col: 'orange',
    dob: '01/08/1980',
    lucky_no: 18,
    cheese: 'Brie'
  },
  {
    id: 5,
    name: 'Margret Marmajuke',
    progress: 16,
    gender: 'female',
    rating: 5,
    col: 'yellow',
    dob: '31/01/1999',
    lucky_no: 33,
    cheese: 'Cheader'
  },
  {
    id: 6,
    name: 'Oli Bob',
    progress: 12,
    gender: 'male',
    rating: 1,
    col: 'red',
    dob: '',
    car: 1,
    lucky_no: 5,
    cheese: 'Cheader'
  },
  {
    id: 7,
    name: 'Mary May',
    progress: 1,
    gender: 'female',
    rating: 2,
    col: 'blue',
    dob: '14/05/1982',
    car: true,
    lucky_no: 10,
    cheese: 'Gouda'
  },
  {
    id: 8,
    name: 'Christine Lobowski',
    progress: 42,
    gender: 'female',
    rating: 0,
    col: 'green',
    dob: '22/05/1982',
    car: 'true',
    lucky_no: 12,
    cheese: 'Manchego'
  },
  {
    id: 9,
    name: 'Brendon Philips',
    progress: 100,
    gender: 'male',
    rating: 1,
    col: 'orange',
    dob: '01/08/1980',
    lucky_no: 18,
    cheese: 'Brie'
  },
  {
    id: 10,
    name: 'Margret Marmajuke',
    progress: 16,
    gender: 'female',
    rating: 5,
    col: 'yellow',
    dob: '31/01/1999',
    lucky_no: 33,
    cheese: 'Cheader'
  },
  {
    id: 11,
    name: 'Oli Bob',
    progress: 12,
    gender: 'male',
    rating: 1,
    col: 'red',
    dob: '',
    car: 1,
    lucky_no: 5,
    cheese: 'Cheader'
  },
  {
    id: 12,
    name: 'Mary May',
    progress: 1,
    gender: 'female',
    rating: 2,
    col: 'blue',
    dob: '14/05/1982',
    car: true,
    lucky_no: 10,
    cheese: 'Gouda'
  },
  {
    id: 13,
    name: 'Christine Lobowski',
    progress: 42,
    gender: 'female',
    rating: 0,
    col: 'green',
    dob: '22/05/1982',
    car: 'true',
    lucky_no: 12,
    cheese: 'Manchego'
  },
  {
    id: 14,
    name: 'Brendon Philips',
    progress: 100,
    gender: 'male',
    rating: 1,
    col: 'orange',
    dob: '01/08/1980',
    lucky_no: 18,
    cheese: 'Brie'
  },
  {
    id: 15,
    name: 'Margret Marmajuke',
    progress: 16,
    gender: 'female',
    rating: 5,
    col: 'yellow',
    dob: '31/01/1999',
    lucky_no: 33,
    cheese: 'Cheader'
  },
  {
    id: 16,
    name: 'Oli Bob',
    progress: 12,
    gender: 'male',
    rating: 1,
    col: 'red',
    dob: '',
    car: 1,
    lucky_no: 5,
    cheese: 'Cheader'
  },
  {
    id: 17,
    name: 'Mary May',
    progress: 1,
    gender: 'female',
    rating: 2,
    col: 'blue',
    dob: '14/05/1982',
    car: true,
    lucky_no: 10,
    cheese: 'Gouda'
  },
  {
    id: 18,
    name: 'Christine Lobowski',
    progress: 42,
    gender: 'female',
    rating: 0,
    col: 'green',
    dob: '22/05/1982',
    car: 'true',
    lucky_no: 12,
    cheese: 'Manchego'
  },
  {
    id: 19,
    name: 'Brendon Philips',
    progress: 100,
    gender: 'male',
    rating: 1,
    col: 'orange',
    dob: '01/08/1980',
    lucky_no: 18,
    cheese: 'Brie'
  },
  {
    id: 20,
    name: 'Margret Marmajuke',
    progress: 16,
    gender: 'female',
    rating: 5,
    col: 'yellow',
    dob: '31/01/1999',
    lucky_no: 33,
    cheese: 'Cheader'
  },
  {
    id: 21,
    name: 'Oli Bob',
    progress: 12,
    gender: 'male',
    rating: 1,
    col: 'red',
    dob: '',
    car: 1,
    lucky_no: 5,
    cheese: 'Cheader'
  },
  {
    id: 22,
    name: 'Mary May',
    progress: 1,
    gender: 'female',
    rating: 2,
    col: 'blue',
    dob: '14/05/1982',
    car: true,
    lucky_no: 10,
    cheese: 'Gouda'
  },
  {
    id: 23,
    name: 'Christine Lobowski',
    progress: 42,
    gender: 'female',
    rating: 0,
    col: 'green',
    dob: '22/05/1982',
    car: 'true',
    lucky_no: 12,
    cheese: 'Manchego'
  },
  {
    id: 24,
    name: 'Brendon Philips',
    progress: 100,
    gender: 'male',
    rating: 1,
    col: 'orange',
    dob: '01/08/1980',
    lucky_no: 18,
    cheese: 'Brie'
  },
  {
    id: 25,
    name: 'Margret Marmajuke',
    progress: 16,
    gender: 'female',
    rating: 5,
    col: 'yellow',
    dob: '31/01/1999',
    lucky_no: 33,
    cheese: 'Cheader'
  },
  {
    id: 26,
    name: 'Oli Bob',
    progress: 12,
    gender: 'male',
    rating: 1,
    col: 'red',
    dob: '',
    car: 1,
    lucky_no: 5,
    cheese: 'Cheader'
  },
  {
    id: 27,
    name: 'Mary May',
    progress: 1,
    gender: 'female',
    rating: 2,
    col: 'blue',
    dob: '14/05/1982',
    car: true,
    lucky_no: 10,
    cheese: 'Gouda'
  },
  {
    id: 28,
    name: 'Christine Lobowski',
    progress: 42,
    gender: 'female',
    rating: 0,
    col: 'green',
    dob: '22/05/1982',
    car: 'true',
    lucky_no: 12,
    cheese: 'Manchego'
  },
  {
    id: 29,
    name: 'Brendon Philips',
    progress: 100,
    gender: 'male',
    rating: 1,
    col: 'orange',
    dob: '01/08/1980',
    lucky_no: 18,
    cheese: 'Brie'
  },
  {
    id: 30,
    name: 'Margret Marmajuke',
    progress: 16,
    gender: 'female',
    rating: 5,
    col: 'yellow',
    dob: '31/01/1999',
    lucky_no: 33,
    cheese: 'Cheader'
  }
];
