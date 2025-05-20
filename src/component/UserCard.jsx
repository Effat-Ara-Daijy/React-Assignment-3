import React from 'react'

const UserCard = (props) => {
if(props.age<12){
  return ( <p>access denied</p>)
 
}
  return (
    <>
    <div>Name:{props.name}</div>
    <div>Age:{props.age}</div>

    <div>isOnline:{props.isOnline ? "online" : "offline"}</div>
    </>
  )
}

export default UserCard