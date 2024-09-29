import { expect, test } from 'vitest'
import {mount} from '@vue/test-utils'
import AppVue from '../src/App.vue'

test('Deve testar a todo list', function () {
   const wrapper = mount(AppVue,{})
   expect(wrapper.get(".total").text()).toBe("Total: 3");
   expect(wrapper.get(".completed").text()).toBe("Completed: 33%");
})
