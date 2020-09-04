import { mount } from './node_modules/@vue/test-utils'
import Footer from './Footer.vue'

describe('Footer', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Footer)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
