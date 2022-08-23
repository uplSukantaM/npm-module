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
                className={props.rootClass}
                name={props.name}
                autofocus={props.autofocus}
                value={props.value}
                type={props.type ?? 'button'}
                onClick={props.onClick}
                disabled={props.disabled}
                {...props}
            >
                {props.buttonText ?? 'Click Me'}
            </button>
            <p className={props.helperTextClass} style={{ color: 'red' }}>{props.helperText}</p>
        </div>
    );
};

export default ButtonField;
