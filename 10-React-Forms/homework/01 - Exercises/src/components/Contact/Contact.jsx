import React from 'react'
import './Contact.modules.css'

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
export function validate(inputs){
let errors = {};
if (!inputs.name){
  errors.name = "Se requiere un nombre"
}
if (!regexEmail.test(inputs.email)){
  errors.email = 'Debe ser un correo electrónico'
}
if (!inputs.message){
  errors.message = "Se requiere un mensaje"
}
return errors;
}

export default function Contact () {
const [inputs, setInputs]= React.useState({
  name: "",
  email: "",
  message: "",
})

const [errors, setErrors] = React.useState({
  name: "",
  email: "",
  message: "",
})

function handleChange(event){
  setInputs({
    ...inputs,
    [event.target.value]: event.target.value
  })

  setErrors(validate({
    ...inputs, 
    [event.target.value]: event.target.value}))
}
function handleSubmit (event){
  event.preventDefault();
  if (!Object.values(errors).length){
    alert('Datos completos')
    setInputs({
      name: "",
      email: "",
      message: "",
    })
    setErrors({
      name: "",
      email: "",
      message: "",
    })
  } else{
    alert("Debe llenar todos los campos")
  }

}
  return (
    <form onSubmit={handleSubmit}>
      <label>Nombre:</label>
      <input 
      className={errors.name && 'warning'}
      onChange={handleChange}
      value={inputs.value}
      type="text" 
      placeholder='Escribe tu nombre...'
      name='name'/>
      {errors.name && <p className='danger'>{errors.name}</p>}
      
      <label>Correo Electrónico:</label>
      <input 
      onChange={handleChange}
      value={inputs.value}
      type="text" 
      name="email" 
      placeholder='Escribe tu email...'
      className={errors.email && 'warning'}/>
      {errors.email && <p className='danger'>{errors.email}</p>}
      
      <label>Mensaje:</label>
      <textarea
      type= "text"
      placeholder='Escribe tu mensaje...' 
      name='message'
      value={inputs.value}
      onChange={handleChange}
      className={errors.message && 'warning'}/>
      {errors.message && <p className='danger'>{errors.message}</p>}
      <button type='submit'>Enviar</button>
    </form>
  )
}
