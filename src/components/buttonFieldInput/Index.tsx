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
                value={props.value}
                name={props.name}
                className={props.rootClass}
                type={props.type ?? 'button'}
                placeholder={props.placeholder}
                onChange={props.onChange}
                disabled={props.disabled}
                {...props}
            >
                click me
            </button>
            <p className={props.helperTextClass} style={{ color: 'red' }}>{props.helperText}</p>
        </div>
    );
};

export default ButtonField;
