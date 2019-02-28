import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Table from "@/components/data-table/Table.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Table.vue", () => {
  let actions;
  let getters;
  let store;

  beforeEach(() => {
    getters = {
      transactions: () => [
        {
          Amount: 345.54,
          Date: "2017-07-23T04:24:49-07:00",
          Description: "Curabitur dictum. Phasellus in",
          ID: "3471DA17-401F-9633-BF81-4CADA6FD5C79",
          Name: "Kyra Lester"
        }
      ],
      loader: () => false
    };

    actions = {
      getTransactions: jest.fn()
    };

    store = new Vuex.Store({
      getters,
      actions
    });
  });

  it("Check if date format is correct", () => {
    const wrapper = shallowMount(Table, { store, localVue });
    const date = "2017-07-23T04:24:49-07:00";
    expect(wrapper.vm.dateFormat(date)).toMatch("7/23/2017");
  });

  it("Check if table contains transaction data", () => {
    const wrapper = shallowMount(Table, { store, localVue });
    const bodyData = wrapper.findAll("div.body-data");
    const ID = bodyData.at(0).text();
    const NAME = bodyData.at(1).text();
    const DESC = bodyData.at(2).text();
    const AMOUNT = bodyData.at(4).text();
    expect(ID).toMatch(getters.transactions()[0].ID.toString());
    expect(NAME).toMatch(getters.transactions()[0].Name.toString());
    expect(DESC).toMatch(getters.transactions()[0].Description.toString());
    expect(AMOUNT).toMatch(getters.transactions()[0].Amount.toString());
  });

  it("Check if table has 6 colums", () => {
    const wrapper = shallowMount(Table, { store, localVue });
    const headerData = wrapper.findAll("div.header-data");
    const bodyData = wrapper.findAll("div.body-data");
    expect(headerData.length).toBe(6);
    expect(bodyData.length).toBe(6);
  });
});
