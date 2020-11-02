import { mount, shallow } from "enzyme";
import React from "react";
import * as notistack from "notistack";
import BookSearch from "../BookSearch";

test("setOpenIndex sets the open index state properly", () => {
  const useSnackbarMock: any = () => {
    const enqueueSnackbar = jest.fn();
    return enqueueSnackbar;
  };
  jest.spyOn(notistack, "useSnackbar").mockImplementation(useSnackbarMock);
  const component: any = shallow(<BookSearch />);
  expect(component).toMatchSnapshot();
  const wrapper = mount(<BookSearch />);

  expect(wrapper.find(".empty")).toBeTruthy;
  const input = wrapper.find("input");

  input.simulate("focus");
  input.simulate("change", { target: { value: "Changed" } });
  wrapper.update();
  expect(wrapper.find(".empty")).toBeFalsy;
});
