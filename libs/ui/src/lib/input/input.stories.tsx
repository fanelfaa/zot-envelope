import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Input } from './input';

const Story: ComponentMeta<typeof Input> = {
	component: Input,
	title: 'Input',
};
export default Story;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const InputEmail = Template.bind({});
InputEmail.args = {
	label: 'Email',
	type: 'email',
};

export const InputPassword = Template.bind({});
InputPassword.args = {
	label: 'Password',
	type: 'password',
};
