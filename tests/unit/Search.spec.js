import { shallowMount } from "@vue/test-utils";
import Search from "@/components/data-table/Search.vue";

describe("Search.vue", ()=> {
  it('check showFilter after button is pressed', ()=> {
    const wrapper = shallowMount(Search);
    expect(wrapper.vm.showFilter).toBe(false);
    wrapper.find('button.show-btn').trigger('click');
    expect(wrapper.vm.showFilter).toBe(true);
  })
})