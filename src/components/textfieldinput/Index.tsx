import React from 'react'
import { outlinedTheme } from '../themes/Index'

const TextField = (props: any) => {

  const errorTheme = {
    borderColor: props.error ? '#ff0505' : '#000000'
  }

  return (
    <>
      <p className={props.lableClass}>{props.label}</p>
      <input
        style={{ ...props.variant, ...errorTheme } ?? { ...outlinedTheme, ...errorTheme }}
        id={props.id}
        value={props.value}
        name={props.name}
        className={props.rootClass}
        type={props.type ?? 'text'}
        placeholder={props.placeholder}
        onChange={props.onChange}
        disabled={props.disabled}
        {...props}
      />
      <p className={props.helperTextClass} style={{ color: 'red' }}>{props.helperText}</p>
    </>
  )
}

export default TextField