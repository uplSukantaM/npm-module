#### Input field's for React.js and Next.js ---

#### Installation:-

##### Using npm :-

```
$ npm install --save formfieldsui
```

##### Using yarn :-

```
$ yarn add formfieldsui
```

#### Import and example:-

```JavaScript
import { EmailFieldInput, TextFieldInput, TextAreaFieldInput, PasswordFieldInput,ButtonFieldInput} from "formfieldsui";

<EmailFieldInput
label='EmailLabel'
placeholder='placeholder'
onChange={(e) =>  e.target.value}
/>

<TextFieldInput
label='textLabel'
placeholder='placeholder'
onChange={(e) =>  e.target.value}
/>

<TextAreaFieldInput
label='textAreaLabel'
placeholder='placeholder'
onChange={(e) =>  e.target.value}
/>

<PasswordFieldInput
label='textLabel'
placeholder='placeholder'
onChange={(e) =>  e.target.value}
/>

<ButtonFieldInput
onclick="alert('Hello world!')"
buttonText="Click"
/>
```

#### Props:-

| Name           | Type   | Default                                                                 | Description                                                                                                                               |
| -------------- | ------ | ----------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| type           | string | text-TextFieldInput, email-EmailFieldInput, password-PasswordFieldInput | It's customizable and it's only applicable for TextFieldInput                                                                             |
| Label          | string |                                                                         | The label content.                                                                                                                        |
| helperText     | string |                                                                         | The helper text content for message's.                                                                                                    |
| error          | bool   | false                                                                   | If `true`, the label is displayed in an error state.                                                                                      |
| id             | string |                                                                         | The id of the `input` element. Use this prop to make `label` and `helperText` accessible for screen readers.                              |
| value          | any    |                                                                         | The value of the `input` element, required for a controlled component.                                                                    |
| name           | string |                                                                         | Name attribute of the `input` element.                                                                                                    |
| placeholder    | string |                                                                         | The placeholder content.                                                                                                                  |
| onChange       | func   |                                                                         | `onChange={(e)= e.target.value}`                                                                                                          |
| rows           | number |                                                                         | The rows attribute specifies the visible height of a text area, in lines. `(it's only aplicable for TextAreaFieldInput)`                  |
| cols           | number |                                                                         | The cols attribute specifies the visible width of a text area. `(it's only aplicable for TextAreaFieldInput)`                             |
| disabled       | bool   | false                                                                   | If `true`, the input field is disabled                                                                                                    |
| showPassword   | bool   |                                                                         | `It's only applicable for PasswordFieldInput`, this state change show and hide icon & paswword filed type to text>password and vice versa |
| showImg        | string |                                                                         | It is used to pass show password eye icon image path                                                                                      |
| hideImg        | string |                                                                         | It is used to pass hide password eye icon image path                                                                                      |
| changeIconFunc | func   |                                                                         | handle showPassword state                                                                                                                 |
| autofocus      | string |                                                                         | Specifies that a button should automatically get focus when the page loads                                                                |
| buttonText     | string |                                                                         | button name                                                                                                                               |

#### ClassName for Css:-

```
lableClass = for label,
rootClass = for input fields,
helperTextClass = for notification "error message"
```

#### variant :-

|     | Name                 |     |
| --- | -------------------- | --- |
|     | outlined `(Default)` |     |
|     | standard             |     |
|     | filled               |     |

```JavaScript
Ex:-
<TextFieldInput  variant='filled' />
<EmailFieldInput  variant='filled' />
<TextAreaFieldInput />
<PasswordFieldInput  variant='filled' />
<ButtonFieldInput variant='outlined'/>
```
