import type { StorybookConfig } from '@storybook/vue3-vite'
import { mergeConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [vue()],
    })
  },
}

export default config
