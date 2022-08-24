/**
 * @uplShreya
 */

import React from "react";
import { TextArea } from "../themes/Index";
const TextAreaField = (props: any) => {

    return (
        <div>
            <label className={`${props.lableClass}`}>{props.label}</label>
            <textarea
                style={TextArea}
                id={props.id}
                value={props.value}
                name={props.name}
                className={props.rootClass}
                type={props.type ?? 'text'}
                placeholder={props.placeholder}
                onChange={props.onChange}
                disabled={props.disabled}
                multiline={props.multiline}
                rows={props.rows}
                cols={props.cols}
                {...props}
            />
            <p className={props.helperTextClass} style={{ color: 'red' }}>{props.helperText}</p>
        </div>
    );
};

export default TextAreaField;
