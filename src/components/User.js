import React,{ useState, useEffect } from 'react'
import SkeletonProfile from './skeletons/SkeletonProfile';

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
         {
          person ?(
          <> 
           <div className='user-top'>
              <div className='image-user'></div>
              <h3>{person.name}</h3> 
           </div>
           <div className="user-bottom">
               <h5>{person.email}</h5>
               <p>{person.phone}</p>
           </div>
            
          </>)
          :([1].map(n=><SkeletonProfile theme="dark" key={n}/>))
         
         }
      </div>
    </>
  )
}

export default User