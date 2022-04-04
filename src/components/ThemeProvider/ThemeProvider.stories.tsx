import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ThemeProvider from './ThemeProvider';

export default {
  title: 'Example/ThemeProvider',
  component: ThemeProvider,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ThemeProvider>;

const Template: ComponentStory<typeof ThemeProvider> = args => <ThemeProvider {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: 'My ThemeProvider',
};
