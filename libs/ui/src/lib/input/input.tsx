import type {
	FormControlProps,
	FormErrorMessageProps,
	InputProps as ChakraInputProps,
	TextProps,
} from '@chakra-ui/react';
import {
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input as ChakraInput,
} from '@chakra-ui/react';

export type InputProps = {
	label: string;
	error?: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	inputProps?: ChakraInputProps;
	labelProps?: TextProps;
	errorProps?: FormErrorMessageProps;
} & FormControlProps &
	Pick<ChakraInputProps, 'value' | 'type' | 'name'>;

export function Input({
	onChange,
	value,
	name,
	type,
	inputProps,
	errorProps,
	error,
	label,
	isInvalid,
	isDisabled,
	isRequired,
	...formControlProps
}: InputProps) {
	return (
		// <Box pos="relative" {...boxProps}>
		<FormControl
			isInvalid={isInvalid}
			isDisabled={isDisabled}
			isRequired={isRequired}
			colorScheme="envelope"
			pos="relative"
			{...formControlProps}
		>
			<FormLabel
				pos="absolute"
				left="2"
				top="-3.5"
				bg="white"
				zIndex="5"
				px="2"
				rounded="base"
				data-testid={`${label.toLowerCase()}-label`}
			>
				{label}
			</FormLabel>
			<ChakraInput
				size="lg"
				placeholder=""
				onChange={onChange}
				value={value}
				type={type}
				name={name}
				{...inputProps}
				data-testid={`${label.toLowerCase()}-input`}
			/>
			<FormErrorMessage
				{...errorProps}
				data-testid={`${label.toLowerCase()}-error`}
			>
				{error}
			</FormErrorMessage>
		</FormControl>
	);
}

export default Input;
