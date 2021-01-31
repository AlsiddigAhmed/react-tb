import React from 'react'
import { ReactTb } from 'react-tb'

const columns: any = [
  {
    name: 'email',
    isHidden: false,
    body: (item: any) => (
      <td>
        <div className='btn'>{item.email}</div>
      </td>
    )
  },
  {
    name: 'username',
    isHidden: false,
    body: (item: any) => (
      <td>
        <div className='btn'>{item.username}</div>
      </td>
    )
  },
  {
    name: 'phone',
    isHidden: false,
    body: (item: any) => (
      <td>
        <div className='btn'>{item.phone}</div>
      </td>
    )
  },
  {
    name: 'gender',
    isHidden: false,
    body: (item: any) => (
      <td>
        <div className='btn'>{item.gender}</div>
      </td>
    )
  },
  {
    name: 'country',
    isHidden: false,
    body: (item: any) => (
      <td>
        <div className='btn'>{item.country}</div>
      </td>
    )
  },
  {
    name: 'address',
    isHidden: false,
    body: (item: any) => (
      <td>
        <div className='btn'>{item.address}</div>
      </td>
    )
  }
]

const data = [
  {
    id: 1,
    username: 'elsiddig',
    email: 'example@gmail.com',
    phone: '0123456789',
    gender: 'male',
    country: 'sudan',
    address: '123 str'
  },
  {
    id: 2,
    username: 'ahmed',
    email: 'example@gmail.com',
    phone: '0123456789',
    gender: 'male',
    country: 'sudan',
    address: '123 str'
  },
  {
    id: 3,
    username: 'ali',
    email: 'example@gmail.com',
    phone: '0123456789',
    gender: 'male',
    country: 'sudan',
    address: '123 str'
  },
  {
    id: 4,
    username: 'khalid',
    email: 'ahmed@gmail.com',
    phone: '0123456789',
    gender: 'male',
    country: 'sudan',
    address: '123 str'
  },
  {
    id: 5,
    username: 'mohammed',
    email: 'example@gmail.com',
    phone: '0123456789',
    gender: 'male',
    country: 'sudan',
    address: '123 str'
  }
]

const App = () => {
  return (
    <div>
      <ReactTb
        columns={columns}
        data={data}
        noDataLabel='no data'
        isDraggable={true}
        onDragEnd={() => {}}
        columnKey={'id'}
      />
    </div>
  )
}

export default App
