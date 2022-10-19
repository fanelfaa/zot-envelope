import type {
	BoxProps,
	FormControlProps,
	FormErrorMessageProps,
	InputProps as ChakraInputProps,
	TextProps,
} from '@chakra-ui/react';
import {
	Box,
	FormControl,
	FormErrorMessage,
	Input as ChakraInput,
	Text,
} from '@chakra-ui/react';

export type InputProps = {
	label: string;
	error?: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	inputProps?: ChakraInputProps;
	labelProps?: TextProps;
	errorProps?: FormErrorMessageProps;
	formControlProps?: FormControlProps;
} & Omit<BoxProps, 'onChange'> &
	Pick<FormControlProps, 'isInvalid' | 'isDisabled' | 'isRequired'> &
	Pick<ChakraInputProps, 'value' | 'type' | 'name'>;

export function Input({
	onChange,
	value,
	name,
	type,
	labelProps,
	inputProps,
	errorProps,
	error,
	label,
	isInvalid,
	isDisabled,
	isRequired,
	formControlProps,
	...boxProps
}: InputProps) {
	return (
		<Box pos="relative" {...boxProps}>
			<FormControl
				isInvalid={isInvalid}
				isDisabled={isDisabled}
				isRequired={isRequired}
				colorScheme="envelope"
				{...formControlProps}
			>
				<ChakraInput
					size="lg"
					placeholder=""
					onChange={onChange}
					value={value}
					type={type}
					name={name}
					{...inputProps}
				/>
				<FormErrorMessage {...errorProps}>{error}</FormErrorMessage>
			</FormControl>
			<Text
				pos="absolute"
				left="2"
				top="-3.5"
				bg="white"
				zIndex="5"
				px="2"
				rounded="base"
				{...labelProps}
			>
				{label}
			</Text>
		</Box>
	);
}

export default Input;
