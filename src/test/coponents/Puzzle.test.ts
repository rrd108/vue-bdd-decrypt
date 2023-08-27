import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Puzzle from '../../components/Puzzle.vue'

describe('Puzzle Component', () => {
  it('shoud load the Puzzle component', () => {
    expect(Puzzle).toBeTruthy()
  })

  it('should set the intial state of the variables', () => {
    const wrapper = mount(Puzzle, {})
    const componentData = wrapper.vm

    expect(componentData.solution).toHaveLength(componentData.secret.length)
  })
})
