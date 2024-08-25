import type { Meta, StoryObj } from '@storybook/vue3'
import { within, userEvent, expect } from '@storybook/test'
import MyPage from './StoryPage.vue'

const meta = {
  title: 'Example/Page',
  component: MyPage,
  render: () => ({
    components: { MyPage },
    template: '<my-page />',
  }),
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MyPage>

export default meta
type Story = StoryObj<typeof meta>

export const LoggedIn: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const loginButton = await canvas.findByRole('button', { name: /Log in/i })
    await expect(loginButton).toBeInTheDocument()
    await userEvent.click(loginButton)
    await expect(loginButton).not.toBeInTheDocument()

    const logoutButton = await canvas.findByRole('button', { name: /Log out/i })
    await expect(logoutButton).toBeInTheDocument()
  },
}

export const LoggedOut: Story = {}
