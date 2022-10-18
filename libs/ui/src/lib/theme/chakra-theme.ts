import type { ComponentStyleConfig } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
	config: {
		initialColorMode: 'light',
		useSystemColorMode: false,
	},
	colors: {
		primary: '#2c79c4',
		primaryDark: '#2763a4',
		envelope: {
			50: 'white',
			100: '#d8ecff',
			200: '#add0f1',
			300: '#82b3e2',
			400: '#5796d3',
			500: '#2c79c4',
			600: '#2164a5',
			700: '#164e86',
			800: '#0b3967',
			900: '#002347',
		},
	},
	fonts: {
		heading: "'Montserrat', sans-serif",
		body: "'Montserrat', sans-serif",
	},
	styles: {
		global: {
			body: {
				fontFamily: "'Montserrat', sans-serif",
			},
		},
	},
	components: {
		Button: {
			variants: {
				outline: {
					bg: 'transparent',
					color: 'white',
					_hover: { bg: 'transparent' },
					_focus: { bg: 'transparent' },
				},
			},
			defaultProps: {
				colorScheme: 'envelope',
			},
		} as ComponentStyleConfig,
	},
});
