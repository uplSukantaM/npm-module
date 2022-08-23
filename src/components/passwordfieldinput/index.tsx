import React from 'react'
import { filledTheme, outlinedTheme, standardTheme } from '../themes/Index'
// import passwordshoweye from "./Image/passwordshoweye.svg"
// import passwordhideeye from "./Image/passwordhideeye.svg"
const PasswordField = (props: any) => {

  const errorTheme = {
    border: props.error ? '1px solid #ff0505' : '1px solid #000000',
  }

  return (
    <>
      <p className={props.lableClass}>{props.Label}</p>
      <div style={{ position: 'relative', width: 'fit-content' }}>
        <input
          style={props.variant === 'standard' ? { ...standardTheme, ...errorTheme }
            : props.variant === 'filled' ? { ...filledTheme, ...errorTheme }
              : { ...outlinedTheme, ...errorTheme }}
          id={props.id}
          value={props.value}
          name={props.name}
          className={props.rootClass}
          type={props.showPassword ? "text" : "password"}
          placeholder={props.placeholder}
          onChange={props.onChange}
          disabled={props.disabled}
          {...props}
        />
        <div >
          {props.showImg && (!props.showPassword ? (
            <img onClick={() => props.changeIconFunc()} src={props.showImg} alt="show" style={{ position: 'absolute', cursor: "pointer", top: '15px', right: '10%', height: '15px', width: '15px' }} />
          ) : (
            <img onClick={() => props.changeIconFunc()} src={props.hideImg} alt="hide" style={{ position: 'absolute', cursor: "pointer", top: '15px', right: '10%', height: '15px', width: '15px' }} />
          ))}
        </div>
      </div>
      <p className={props.helperTextClass} style={{ color: 'red' }}>{props.helperText}</p>
    </>
  )
}

export default PasswordField