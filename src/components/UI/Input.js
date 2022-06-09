import React from 'react'

export default function Input(props) {
  return (
    <>
        <input
            className={props.className}
            type={props.type}
            placeholder={props.placeholder}
            aria-label={props.ariaLabel} 
            defaultValue={props.defaultValue} 
            name={props.name} 
            onChange={props.onChange}
            onBlur={props.onBlur}
            value={props.value}
         />
    </>
  )
}
