import { mount } from './node_modules/@vue/test-utils'
import Header from  './Header.vue'

describe('Header', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Header)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  
})
