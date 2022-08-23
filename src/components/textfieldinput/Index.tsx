import React from 'react'
import { filledTheme, outlinedTheme, standardTheme } from '../themes/Index'

const TextField = (props: any) => {

  const errorTheme = {
    border: props.error ? '1px solid #ff0505' : '1px solid #000000',
  }

  return (
    <>
      <p className={props.lableClass}>{props.label}</p>
      <input
        style={props.variant === 'standard' ? { ...standardTheme, ...errorTheme }
          : props.variant === 'filled' ? { ...filledTheme, ...errorTheme }
            : { ...outlinedTheme, ...errorTheme }}s
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