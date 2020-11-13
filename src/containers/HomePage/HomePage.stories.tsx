import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import HomePage from '.'

export default {
  title: 'HomePage',
  component: HomePage
} as Meta

export const Default: Story = (args) => <HomePage {...args} />
