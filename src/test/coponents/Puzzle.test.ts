import { describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Puzzle from '../../components/Puzzle.vue'

vi.mock('../../assets/text.ts', () => ({ default: 'Gauranag rrd!' }))

describe('Puzzle Component', () => {
  it('shoud load the Puzzle component', () => {
    expect(Puzzle).toBeTruthy()
  })

  it('should set the intial state of the variables', () => {
    const wrapper = mount(Puzzle, {})
    const componentData = wrapper.vm

    expect(componentData.solution).toHaveLength(componentData.secret.length)
    expect(componentData.solution).toHaveLength(13)
    expect(componentData.clickedPosition).toBe(-1)

    // TODO expect the component dispaly the shuffled text
  })

  it('should react to cliks', async () => {
    const wrapper = mount(Puzzle, {})
    const componentData = wrapper.vm

    const span = wrapper.get('span')
    span.trigger('click')
    expect(componentData.clickedPosition).toBe(0)
    expect(componentData.oldChar).toBe(span.text())

    await wrapper.vm.$nextTick()
    expect(wrapper.get('input').isVisible()).toBe(true)
  })

  it('should handle the input', async () => {
    const wrapper = mount(Puzzle, {})
    wrapper.get('span').trigger('click')
    await wrapper.vm.$nextTick()

    const input = wrapper.get('input')
    const typedChar = wrapper.vm.secret[0]
    input.setValue(typedChar)
    input.trigger('input')
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.solution[0]).toBe(typedChar)
  })
})
