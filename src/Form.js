import React from 'react';
import {useForm} from 'react-hook-form';


function Form({preLoadValues}) {


const {register,handleSubmit} = useForm({
   defaultValues : preLoadValues
})

const subForm = data => {
  console.log(data)
  alert(JSON.stringify(data))
}


  return (
    <div>
       <form onSubmit={handleSubmit(subForm)}>
           FirstName :    <input name="firstName" {...register('firstName')}/><br/><br/>
           <div>
           LastName :    <input name="lastName" {...register('lastName')}/>
           </div>
           <button type='submit'>Submit</button>
       </form>
    </div>
  )
}

export default Form
