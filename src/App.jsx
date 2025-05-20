import React from 'react'
import UserCard from './component/UserCard'
import './App.css'

const App = () => {

  
  return (
    <>

    < UserCard name= {"Daijy"} age= {28} isOnline={false} />
    < UserCard name= {"Huma"} age= {24} isOnline={true} />
    < UserCard name= {"Ariful"} age= {9} isOnline={true} />
    
    </>


  )
}

export default App