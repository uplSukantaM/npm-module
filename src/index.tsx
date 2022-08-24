import React from 'react'
import EmailField from './components/emailFieldInput/Index';
import TextField from './components/textfieldinput/Index';
import TextAreaField from './components/textareaFieldInput/Index';
import PasswordField from './components/passwordfieldinput'
import ButtonField from './components/buttonFieldInput/Index';
import { outlinedTheme, standardTheme, filledTheme, BtnOutlined, BtnFilled, BtnStandard } from './components/themes/Index'

const EmailFieldInput = (props: any): JSX.Element => {

	return (
		<EmailField {...props} />
	)
}

const TextFieldInput = (props: any) => {
	return (
		<>
			<TextField {...props} />
		</>
	)
}
const PasswordFieldInput = (props: any) => {
	return (

		<PasswordField {...props} />

	)
}

const TextAreaFieldInput = (props: any) => {
	return (
		<TextAreaField {...props} />
	)
}

const ButtonFieldInput = (props: any) => {
	return (
		<ButtonField {...props} />
	)
}

export { TextFieldInput, EmailFieldInput, TextAreaFieldInput, PasswordFieldInput, ButtonFieldInput,  outlinedTheme, standardTheme, filledTheme, BtnOutlined, BtnFilled, BtnStandard }
