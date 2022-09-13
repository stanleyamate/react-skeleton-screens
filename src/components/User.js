import React,{ useState, useEffect } from 'react'

const User = () => {
  const [person, setPerson] = useState(null)

  useEffect(() => {
    setTimeout( async() => {
   const res=  await fetch('https://jsonplaceholder.typicode.com/users/1')
    const data =await res.json()
    setPerson(data)
    console.log(person)
    }, 5000);
  }, [])

  return ( 
    <>
      <div className='user'>
        <h1>user deatils</h1>
         {
          person ?(
          <> 
           <div>
              <div className='image-user'></div>
              <h3>{person.name}</h3> 
           </div>
            <h5>{person.email}</h5>
            <p>{person.phone}</p>
          </>)
          :<div>Loading...</div>
         
         }
      </div>
    </>
  )
}

export default User