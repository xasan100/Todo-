import React, { useState } from 'react';

const App = () => {

  const data = [
    { id: 1, title: 'KhasanBoy' },
    { id: 2, title: 'Ali' },
    { id: 3, title: 'Sardor' },
    { id: 4, title: 'Umarjon' },
    { id: 5, title: 'Ruqiya' },
  ]

  const [category, setCategory] = useState('id');
  const [inputValue, setInputValue] = useState('name')
  console.log(category);

  return (
    <div>
      <table border='1' style={{width: '60%', margin: '40px auto'}}>
        <thead>
          <tr>
            <td>
              <select style={{ width: '99%' }} onChange={(e) => setCategory(e.target.value)}>
                <option name='id'>id</option>
                <option name='title'>name</option>
              </select>
            </td>
            <td>
              <input style={{ width: '99%' }} onChange={(e) => setInputValue(e.target.value)} />
            </td>
          </tr>
        </thead>
        <tbody>
          {data.map((value, id) => (value[category]+'').toLocaleLowerCase().includes(inputValue+''.toLocaleLowerCase()) && (
            <tr key={id}>
              <td>{value.id}</td>
              <td>{value.title}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default App;