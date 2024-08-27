import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import ReusableButton from '../ReusableButton.vue'

describe('ReusableButton', () => {
  it('renders properly', () => {
    const wrapper = mount(ReusableButton, {
      slots: {
        default: 'Click me',
      },
    })
    expect(wrapper.text()).toContain('Click me')
  })

  it('emits click event when clicked', async () => {
    const wrapper = mount(ReusableButton)
    await wrapper.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
  })
})
