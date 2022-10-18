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
	inputProps?: ChakraInputProps;
	labelProps?: TextProps;
	errorProps?: FormErrorMessageProps;
	formControlProps?: FormControlProps;
} & BoxProps &
	Pick<FormControlProps, 'isInvalid' | 'isDisabled' | 'isRequired'> &
	Pick<ChakraInputProps, 'onChange' | 'value' | 'type'>;

export function Input({
	onChange,
	value,
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
				{...labelProps}
			>
				{label}
			</Text>
		</Box>
	);
}

export default Input;
