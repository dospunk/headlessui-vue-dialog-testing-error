import HelloWorld from "../../src/components/HelloWorld.vue";
import { mount } from "@vue/test-utils";
import { Dialog } from "@headlessui/vue";
import { setupIntersectionObserverMock } from "../testUtils";

beforeEach(() => {
  setupIntersectionObserverMock();
});

//this will fail
test("Can open HelloWorld with teleport unstubbed", async () => {
  const wrapper = mount(HelloWorld);
  await wrapper.find("#open-button").trigger("click");
  expect(wrapper.findComponent(Dialog).html()).toEqual(
    expect.stringContaining("I am open!")
  );
});

//this will pass, but generate a ton of warnings about FocusTrap
test("Can open HelloWorld with teleport stubbed", async () => {
  const wrapper = mount(HelloWorld, {
    global: {
      stubs: {
        teleport: true,
      },
    },
  });
  await wrapper.find("#open-button").trigger("click");
  expect(wrapper.findComponent(Dialog).html()).toEqual(
    expect.stringContaining("I am open!")
  );
});
