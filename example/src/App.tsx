import React from 'react'

import ReactTable from 'react-tb'
import 'react-tb/dist/index.css'

const columns: any = [
  {
    name: 'Id',
    isHidden: false,
    body: (item: any) => (
      <td>
        <div className='btn'>{item.id}</div>
      </td>
    )
  },
  {
    name: 'Username',
    isHidden: false,
    body: (item: any) => (
      <td>
        <div className='btn'>{item.name}</div>
      </td>
    )
  }
]

// const App = () => {
//   return (
//     <ReactTable
//       data={[
//         { id: 1, name: 'siddig' },
//         { id: 1, name: 'siddig' },
//         { id: 1, name: 'siddig' }
//       ]}
//       noDataLabel='no data found'
//       columns={columns}
//     />
//   )
// }

const App = () => {
  return <div></div>
}

export default App
