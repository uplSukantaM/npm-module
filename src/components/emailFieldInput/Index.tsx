/**
 * @uplShreya
 */

import React from "react";
import { outlinedTheme } from "../themes/Index";
const EmailField = (props: any) => {


    const errorTheme = {
        borderColor: props.error ? '#ff0505' : '#000000'
    }

    return (
        <div>
            <label className={`${props.lableClass}`}>{props.label}</label>
            <form>
                <input
                    style={{ ...props.variant, ...errorTheme } ?? { ...outlinedTheme, ...errorTheme }}
                    id={props.id}
                    value={props.value}
                    name={props.name}
                    className={props.rootClass}
                    type={'email'}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                    disabled={props.disabled}
                    {...props}
                />
            </form>
            <p className={props.helperTextClass} style={{ color: 'red' }}>{props.helperText}</p>
        </div>
    );
};

export default EmailField;
