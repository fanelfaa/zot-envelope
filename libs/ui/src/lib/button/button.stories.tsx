import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from './button';

export default {
	component: Button,
	title: 'Button',
	argTypes: {
		variant: {
			options: ['solid', 'outline', 'outline-envelope'],
			control: { type: 'radio' },
		},
	},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Solid = Template.bind({});
Solid.args = {
	variant: 'solid',
	children: 'Solid Button',
};
export const Outline = Template.bind({});
Outline.args = {
	variant: 'outline',
	children: 'Outline Button',
};
