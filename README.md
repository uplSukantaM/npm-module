This is a basic text input field for React.js and Next.js --->

Installation ->
|
|-> yarn --- yarn add textfields
|
|-> npm --- npm i textfields

Import:->

## import { TextField } from "textfields";

## <TextField />

Props:->
label,
id,
value,
name,
className,
type,
placeholder,
onChange,
disabled...

ClssName for Css:->
labelClass = for label,
rootClass = for input fields

Example:->

import { TextField } from "textfields";
    const FunctionName = () => {
        return (
            <>
                <TextField lable='lable' lableClass={`text-[red]`} type='text' placeholder='placeholder' />
            </>
    )
}

export default FunctionName;