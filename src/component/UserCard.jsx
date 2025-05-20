import React from 'react'

const UserCard = (props) => {
if(props.age<12){
  return ( <div className="card"><p className="denied">access denied</p></div>)
 
}
  return (
    <>
    <div className="card">
      <div>Name:{props.name}</div>
      <div>Age:{props.age}</div>
      <div>isOnline:{props.isOnline ?  (
            <span style={{ color: 'green' }}>Online</span>
          ) : (
            <span style={{ color: 'red' }}>Offline</span>
          )}
        </div>
    </div>
    </>
  )
}

export default UserCard