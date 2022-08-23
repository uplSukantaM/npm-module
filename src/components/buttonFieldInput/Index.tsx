/**
 * @uplShreya
 * This component taken from Flo
 */

import React from "react";

const ButtonField = (props: any) => {
    const outlined = {
        border: '1px solid black',
        color: ' black',
        padding: '10px 10px 10px 10px',
        textalign: 'center',
        cursor: 'pointer'
    }
    const defaultTheme = {
        border: 'none',
        background: 'none',
        cursor: 'pointer'
    }

    return (
        <div>
            <button
                style={
                    // props.variant === 'standard' ? standardTheme: props.variant === 'filled' ? filledTheme:
                    props.variant === 'outlinedTheme' ? outlined : defaultTheme}
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
