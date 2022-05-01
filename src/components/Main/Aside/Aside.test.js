import React from "react";
import { shallow } from "enzyme";
import Aside from "./Aside";

describe("Aside", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Aside />);
    expect(wrapper).toMatchSnapshot();
  });
});
