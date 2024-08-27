import type { Meta, StoryObj } from '@storybook/vue3'
import { within, userEvent } from '@storybook/test'
import MyPage from './StoryPage.vue'
import * as HeaderStories from './Header.stories'

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
} satisfies Meta<typeof MyPage>

export default meta
type Story = StoryObj<typeof meta>

export const LoggedIn: Story = {
  args: {
    ...HeaderStories.LoggedIn.args,
  },
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement)
    const loginButton = await canvas.getByRole('button', { name: /Log in/i })
    await userEvent.click(loginButton)
  },
}

export const LoggedOut: Story = {
  args: {
    ...HeaderStories.LoggedOut.args,
  },
}
