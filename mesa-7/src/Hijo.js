

import React from 'react'

const array= ['HOLA', 'HOLA', 'HOLA', 'MUNDO'];

export default function Hijo() {
  return (
    <div>
      {array.map((saludo, index) => {
           return <h1 style={{color: 'blue', textAlign: 'center'}} key={index}>{saludo}</h1>
      } )}
    </div>
  )
}
