import React from 'react'

const Users = ()=>{
  return   new Promise((resolve,reject)=>{
      let data = {
          firstName : 'Hayansh',
          lastName : 'Krishna'
      }

      setTimeout(()=>{
           resolve(data)
      },5000)
  })
}

export default Users