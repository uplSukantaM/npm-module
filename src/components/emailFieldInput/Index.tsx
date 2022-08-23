/**
 * @uplShreya
 * This component taken from Pictplay
 */

import React from "react";
import { filledTheme, outlinedTheme, standardTheme } from "../themes/Index";
//import { EmailStartIcon } from "../emailFieldInput/image/svg_files";
const EmailField = (props: any) => {
    // const emailStartSvg = useState(EmailStartIcon);

    const errorTheme = {
        border: props.error ? '1px solid #ff0505' : '1px solid #000000',
    }

    return (
        <div>
            <label className={`${props.lableClass}`}>{props.label}</label>
            <form>
                <input
                    style={props.variant === 'standard' ? { ...standardTheme, ...errorTheme }
                        : props.variant === 'filled' ? { ...filledTheme, ...errorTheme }
                            : { ...outlinedTheme, ...errorTheme }}
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
