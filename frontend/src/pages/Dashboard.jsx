import React from 'react'

const Dashboard = ({user,setUser}) => {
  return (
    <h1 className='flex justify-center items-center h-screen text-2xl'>{user?.name}</h1>
  )
}

export default Dashboard