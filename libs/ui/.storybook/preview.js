const theme = require('../src/lib/theme/chakra-theme.ts');

export const parameters = {
	chakra: {
		theme: theme.myTheme,
	},
	controls: {
		exclude: /^_[a-zA-Z]*/g,
	},
};
