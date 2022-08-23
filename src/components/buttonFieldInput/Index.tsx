/**
 * @uplShreya
 * This component taken from Flo
 */

import React from "react";

const ButtonField = (props: any) => {
    return (
        <div>
            <button
                id={props.id}
                name={props.name}
                className={props.rootClass}
                type={props.type ?? 'button'}
                placeholder={props.placeholder}
                onClick={props.onClick}
                disabled={props.disabled}
                autofocus={props.autofocus}
                value={props.value}
                {...props}
            >
                {props.buttonText ?? 'Click'}
            </button>
            <p className={props.helperTextClass} style={{ color: 'red' }}>{props.helperText}</p>
        </div>
    );
};

export default ButtonField;
