import React from 'react'
const PasswordField = (props: any) => {

  const errorTheme = {
    borderColor: props.error ? '#ff0505' : '#000000'
  }

  return (
    <>
      <p className={props.lableClass}>{props.label}</p>
      <div style={{ position: 'relative', width: 'fit-content' }}>
        <input
          style={{ ...props.variant, ...errorTheme }}
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