import type { Meta, StoryObj } from '@storybook/vue3'
import { fn } from '@storybook/test'

import MyHeader from './StoryHeader.vue'

const meta = {
  title: 'Example/Header',
  component: MyHeader,
  render: (args) => ({
    components: { MyHeader },
    setup() {
      return { args }
    },
    template: '<my-header v-bind="args" />',
  }),
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MyHeader>

export default meta
type Story = StoryObj<typeof meta>

export const LoggedIn: Story = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
}

export const LoggedOut: Story = {
  args: {
    user: null,
  },
}
