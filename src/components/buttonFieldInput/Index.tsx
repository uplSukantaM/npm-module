/**
 * @uplShreya
 */

import React from "react";

const ButtonField = (props: any) => {
    const outlinedTheme = {
        border: '1px solid black',
        color: ' black',
        padding: '10px 10px 10px 10px',
        textalign: 'center',
        cursor: 'pointer'
    }
    const filledTheme = {
        border: 'none',
        background: '#4CAF50',
        color: ' white',
        padding: '10px 10px 10px 10px',
        textalign: 'center',
        cursor: 'pointer'
    }
    const standardTheme = {
        border: 'none',
        background: 'none',
        cursor: 'pointer'
    }


    return (
        <div>
            <button
                style={
                    props.variant === 'filled' ? filledTheme : props.variant === 'outlined' ? outlinedTheme : standardTheme}
                id={props.id}
                className={props.rootClass}
                name={props.name}
                autofocus={props.autofocus}
                value={props.value}
                type={props.type ?? 'button'}
                onClick={props.onClick}
                disabled={props.disabled}
                {...props}
            >
                {props.buttonText ?? 'Click'}
            </button>
            <p className={props.helperTextClass} style={{ color: 'red' }}>{props.helperText}</p>
        </div>
    );
};

export default ButtonField;
