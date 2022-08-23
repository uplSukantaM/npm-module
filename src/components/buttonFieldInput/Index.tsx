/**
 * @uplShreya
 * This component taken from Flo
 */

import React from "react";
const ButtonField = (props: any) => {

    const TextAreaTheme = {
        backgroundColor: '#4CAF50',
        color: 'white'
    }

    return (
        <div>
            <button
                style={TextAreaTheme}
                id={props.id}
                name={props.name}
                className={props.rootClass}
                type={props.type ?? 'button'}
                placeholder={props.placeholder}
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
