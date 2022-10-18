import type { ButtonProps as ChakraButtonProps } from '@chakra-ui/react';
import { Button as ChakraButton } from '@chakra-ui/react';

// cuma overide prop h karena overide props lainnya sudah di theme
export function Button({ children, ...props }: ChakraButtonProps) {
	return (
		<ChakraButton h="12" {...props}>
			{children}
		</ChakraButton>
	);
}

export default Button;
