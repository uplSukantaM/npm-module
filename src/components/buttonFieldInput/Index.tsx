/**
 * @uplShreya
 */

import React from "react";
import { BtnStandard } from "../themes/Index";

const ButtonField = (props: any) => {

    return (
        <div>
            <button
                style={props.variant || BtnStandard}
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
        </div>
    );
};

export default ButtonField;
