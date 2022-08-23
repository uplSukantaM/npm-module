import React from 'react'
import EmailField from './components/emailFieldInput/Index';
import TextField from './components/textfieldinput/Index';
import TextAreaField from './components/textareaFieldInput/Index';
import ButtonField from './components/buttonFieldInput/Index';

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

export { TextFieldInput, EmailFieldInput, TextAreaFieldInput, ButtonFieldInput }
